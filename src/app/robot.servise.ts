import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Item { itemId: number; }

@Injectable()
export class RobotServise {
    itemDoc: AngularFirestoreDocument<Item>;
    item: Observable<Item>;

    constructor(private db: AngularFirestore) {
    }

    getRobot() {
        this.itemDoc = this.db.doc<Item>('items/name');
        this.item = this.itemDoc.valueChanges();
        return this.item;
    }
}
