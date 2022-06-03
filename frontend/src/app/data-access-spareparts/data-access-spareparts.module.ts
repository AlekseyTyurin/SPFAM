import { NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {reducers} from "./state/reducers";
import {EffectsModule} from "@ngrx/effects";
import {SparePartsEffects} from "./state/effects/spare-parts.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('sparePartsData', reducers),
    EffectsModule.forRoot([SparePartsEffects])
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
