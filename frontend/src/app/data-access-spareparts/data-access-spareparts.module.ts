import { NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {reducers} from "./state/reducers";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('sparePartsData', reducers)
  ]
})
export class DataAccessSparepartsModule {
  // tslint:disable-next-line:typedef
  static forRoot() {
    return {
      ngModule: DataAccessSparepartsModule
    };
  }
}
