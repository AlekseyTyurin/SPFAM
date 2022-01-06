import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparePartsService {

  constructor(private http: HttpClient) { }

  getAllSpareParts(){
    return this.http.get('http://localhost:3000/spare-parts/')
  }
}
