import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SparePart} from "../application/spare-parts.facade";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SparePartsApi {

  getSearchSparePart(searchQuery: string): Observable<SparePart[]> {
    return this.http.get<SparePart[]>('assets/mock-data/spare-parts.json');
  }

  constructor(private http: HttpClient) {
  }
}









