import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface Item { itemId: number; }

@Injectable()
export class RobotService {
    private itemDoc: AngularFirestoreDocument<Item>;

    constructor(private db: AngularFirestore) {
      this.itemDoc = this.db.doc<Item>('items/name');
    }

    getRobot(): Observable<Item> {
        return this.itemDoc.valueChanges();
    }

    setName(itemId: number) {
      return this.itemDoc.set({itemId});
    }

    addRobot(): Observable<Item> {
        return this.itemDoc.valueChanges()
            .pipe(map((item: any) => {
                return (item + 1);
            }));
    }
}
