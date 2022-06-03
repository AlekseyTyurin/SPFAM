import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {BehaviorSubject, map, startWith} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {SparePartsFacade} from "./data-access-spareparts/application/spare-parts.facade";

export interface PeriodicElement {
  name: string;
  position: number;
  availability: number | string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Агро-тех', availability: 50, symbol: 'H'},
  {position: 2, name: 'Украгрозапчасть', availability: 4, symbol: 'He'},
  {position: 3, name: 'АГРОТРЕЙД', availability: 123, symbol: 'Li'},
  {position: 4, name: 'Nitrogen', availability: 9, symbol: 'N'},
  {position: 5, name: 'Oxygen', availability: 'предзаказ', symbol: 'O'},
  {position: 6, name: 'Fluorine', availability: 103, symbol: 'F'},
  {position: 7, name: 'Neon', availability: 20, symbol: 'Ne'},
];

const getObservable = (collection: AngularFirestoreCollection<any>) => {
  const subject = new BehaviorSubject<any[]>([]);
  collection.valueChanges({idField: 'id'}).subscribe((val: any[]) => {
    subject.next(val);
  });
  return subject;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myControl = new FormControl();
  options: any = [];
  filteredOptions: Observable<any[]> | undefined;
  details: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'availability', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private sps: SparePartsFacade, private store: AngularFirestore) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(' '),
      map((value: any) => this._filter(value)),
    );

    // this.spareparts.subscribe(data => console.log(data))
    // this.inProgress.subscribe(data => console.log(data))
    // this.done.subscribe(data => console.log(data));
  }


  private _filter(filterValue: string): any {
    if (filterValue.length > 1) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();

      this.sps.getAllSpareParts().subscribe((data: any) => this.options = data);
    } else {
      this.options = [];
    }
    return this.options.filter((option: any) => option.title.toLowerCase().includes(filterValue));
  }

  routerToDetails(data: string): void {
    this.details = new Array(data);
  }
}
