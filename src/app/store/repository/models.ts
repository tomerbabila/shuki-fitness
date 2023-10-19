import { Timestamp } from '@angular/fire/firestore';

export type Identifiable = {
  id: string;
};

export type Timestampable = {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type Ownable = {
  uid: string;
};

export type Entity = Identifiable & Timestampable;
export type OwnableEntity = Entity & Ownable;

export type Insertable<T> = Omit<T, keyof Entity>;
export type Updateable<T> = Omit<Insertable<T>, keyof Ownable>;
export type Updates<T> = Partial<Updateable<T>>;
