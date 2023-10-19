import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { nameof } from '../utils';
import {
  Entity,
  Insertable,
  Ownable,
  Updateable,
  Updates,
} from './repository.model';

export abstract class EntityRepositoryService<T extends Entity> {
  private readonly _firestore = inject(Firestore);
  private readonly _auth = inject(Auth);

  abstract readonly collectionPath: string;

  /**
   * Returns observable of entities owned by the user with uid.
   * If uid is not provided, uses the current user's uid.
   */
  observeOwned(uid?: Ownable['uid']) {
    return collectionData(
      query(
        collection(this._firestore, this.collectionPath),
        where(nameof<Ownable>('uid'), '==', uid ?? this._auth.currentUser?.uid)
      ),
      {
        idField: nameof<Entity>('id'),
      }
    ) as Observable<T[]>;
  }

  observeAll() {
    return collectionData(collection(this._firestore, this.collectionPath), {
      idField: nameof<Entity>('id'),
    }) as Observable<T[]>;
  }

  async update(id: Entity['id'], updates: Updates<T> | Updateable<T>) {
    return await updateDoc(doc(this._firestore, this.collectionPath, id), {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  }

  async replace(id: Entity['id'], entity: Updateable<T>) {
    return await setDoc(doc(this._firestore, this.collectionPath, id), {
      ...entity,
      updatedAt: serverTimestamp(),
    });
  }

  async create(entity: Insertable<T>) {
    return await addDoc(collection(this._firestore, this.collectionPath), {
      ...entity,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  async remove(id: Entity['id']) {
    return await deleteDoc(doc(this._firestore, this.collectionPath, id));
  }
}
