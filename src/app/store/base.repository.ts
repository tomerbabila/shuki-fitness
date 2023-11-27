import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable, from, switchMap, of } from 'rxjs';
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
    const docRef = this.afs.collection<T>(this.collectionName).doc<T>(docId);

    return from(docRef.get()).pipe(
      switchMap(docSnapshot => {
        if (docSnapshot.exists) {
          return docRef.valueChanges({ idField: 'id' });
        }
        return of(undefined);
      })
    );
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
