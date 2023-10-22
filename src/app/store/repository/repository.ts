import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export class BaseRepository<T> {
  constructor(
    private afs: AngularFirestore,
    private collectionName: string
  ) {}

  create(data: T): Promise<DocumentReference<T>> {
    return this.afs.collection<T>(this.collectionName).add(data);
  }

  readAll(): Observable<T[]> {
    return this.afs.collection<T>(this.collectionName).valueChanges();
  }

  readById(docId: string): Observable<T | undefined> {
    return this.afs
      .collection<T>(this.collectionName)
      .doc<T>(docId)
      .valueChanges();
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