import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {SparePartsFirestore} from "../../services/spare-parts.firestore";
import {Store} from "@ngrx/store";
import {SparePartsActions} from "../state/actions";

export interface SparePart {
  id: number;
  itemCode: string;
  itemImgUrl?: string;
  brand: string;
  brandIcon: string;
  tooltipText?: string;
  status: string;
  statusText: string;
  statusColor: string;
  description: string;
  original: string;
  originalColor: string;
  sellerName: string;
  sellerContactPhone: string;
}

const getObservable = (collection: AngularFirestoreCollection<SparePart>) => {
  const subject = new BehaviorSubject<SparePart[]>([]);
  collection.valueChanges({idField: 'id'}).subscribe((val: SparePart[]) => {
    subject.next(val);
  });
  return subject;
};


@Injectable({
  providedIn: 'root'
})
export class SparePartsFacade {
  private dbPath = '/spareparts';
  tutorialsRef: AngularFireList<any>;

  constructor(private http: HttpClient, private db: AngularFireDatabase, private firestore: SparePartsFirestore,
              private store: Store<any>, private _store: AngularFirestore) {
    this.tutorialsRef = db.list(this.dbPath);

  }


  getSearchSpareParts(searchQuery: string) {
    this._store.collection('spareparts', ref => ref.where('itemCode', '==', `${searchQuery}`));
  }

  getAllSpareParts(): Observable<any> {
    return this.http.get('http://localhost:3000/spare-parts/');
  }


  searchSpareParts(searchQuery: string) {
    return this.http.get('http://localhost:3000/spare-parts/' + searchQuery);

  }


  getSearchSparePart(searchQuery: string): void {
    this.store.dispatch(SparePartsActions.searchSpareParts({searchQuery}));
  }

}
