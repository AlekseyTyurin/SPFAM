import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { SparePartsActions} from '../actions';
import {catchError, exhaustMap, map, of} from "rxjs";
import {SparePartsApi} from "../../infrastructure/spare-parts.api";


@Injectable()
export class SparePartsEffects {
  searchSparePart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SparePartsActions.searchSpareParts),
      exhaustMap(action => this.sparePartsApi.getSearchSparePart(action.searchQuery).pipe(
        map(spareParts => SparePartsActions.searchSparePartsSuccess({spareParts})),
        catchError(error => of(SparePartsActions.searchSparePartsFailure({error})))
      ))
    );
  });


  constructor(private actions$: Actions, private sparePartsApi: SparePartsApi) {
  }
}
