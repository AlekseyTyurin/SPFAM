import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import {SparePart} from "../data-access-spareparts/application/spare-parts.facade";

@Injectable({
  providedIn: 'root'
})
export class SparePartsFirestore extends FirestoreService<SparePart> {

  protected basePath = 'spareparts';

}
