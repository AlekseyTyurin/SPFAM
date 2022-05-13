import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {map, startWith} from 'rxjs';
import {SparePartsService} from './services/spare-parts.service';
// import firebase from "firebase/compat";
// import initializeApp = firebase.initializeApp;
//
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


  constructor(private sps: SparePartsService) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(' '),
      map((value: any) => this._filter(value)),
    );
  }


  private _filter(filterValue: string): any {
    if (filterValue.length > 1) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();

      this.sps.getAllSpareParts().subscribe((data) => this.options = data);
    } else {
      this.options = [];
    }
    return this.options.filter((option: any) => option.title.toLowerCase().includes(filterValue));
  }

  routerToDetails(data: string): void {
    this.details = new Array(data);
  }
}
