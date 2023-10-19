import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

function firebaseSerialize<T>(object: T) {
  return JSON.parse(JSON.stringify(object));
}

export class FirestoreCrudService<T> {
  private collection: AngularFirestoreCollection<T>;

  constructor(
    private afs: AngularFirestore,
    collectionName: string
  ) {
    this.collection = this.afs.collection(collectionName);
  }
}
