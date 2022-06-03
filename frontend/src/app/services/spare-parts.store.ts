import { Injectable } from '@angular/core';
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class SparePartsStore extends StoreService<any> {
  protected store = 'spare-parts';

  constructor() {
    super({
      loading: true,
      spareParts: [],
    });
  }
}
