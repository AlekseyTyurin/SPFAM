import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface SparePart {
  id: number;
  itemCode: string;
  itemImgUrl?: string;
  brand: string;
  brandIcon: string;
  status: string;
  statusText: string;
  statusColor: string;
  description: string;
  original: string;
  originalColor: string;
  sellerName: string;
  sellerContactPhone: string;
}


@Injectable({
  providedIn: 'root'
})
export class SparePartsService {

  constructor(private http: HttpClient) {
  }

  getAllSpareParts(): Observable<any>{
    return this.http.get('http://localhost:3000/spare-parts/');
  }

  getAllMockSpareParts(): Observable<SparePart[]>{
    return this.http.get<SparePart[]>('assets/mock-data/spare-parts.json');
  }


}
