import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export class BaseRepository<T> {
  protected afs = inject(AngularFirestore);

  constructor(private collectionName: string) {}

  create(data: Omit<T, 'id'>): Promise<DocumentReference<T>> {
    return this.afs.collection<T>(this.collectionName).add(data as T);
  }

  readAll(): Observable<T[]> {
    return this.afs
      .collection<T>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  readById(docId: string): Observable<T | undefined> {
    return this.afs
      .collection<T>(this.collectionName)
      .doc<T>(docId)
      .valueChanges({ idField: 'id' });
  }

  update(docId: string, data: Partial<T>): Promise<void> {
    return this.afs
      .collection<T>(this.collectionName)
      .doc<T>(docId)
      .update(data);
  }

  delete(docId: string): Promise<void> {
    return this.afs.collection<T>(this.collectionName).doc<T>(docId).delete();
  }
}
