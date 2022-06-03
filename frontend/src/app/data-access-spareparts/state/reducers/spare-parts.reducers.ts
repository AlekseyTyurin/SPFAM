import {createReducer, on} from "@ngrx/store";
import * as SparePartsActions from '../actions/spare-parts.actions';
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {SparePart} from "../../application/spare-parts.facade";
import {SparePartState} from "../../entities";

export const adapter: EntityAdapter<SparePart> = createEntityAdapter<SparePart>({
  selectId: (sparePart: SparePart) => sparePart.id,
  sortComparer: (a: SparePart, b: SparePart) => a.itemCode.localeCompare(b.itemCode)
});


const initialState: SparePartState = adapter.getInitialState({
  isLoading: false
});

export const sparePartsReducer = createReducer(
  initialState,
  on(SparePartsActions.searchSpareParts, (state) => ({...state, isLoading: true})),
  on(SparePartsActions.searchSparePartsSuccess, (state, action) => ({
    ...adapter.setAll(action.spareParts, state),
    error: null,
    isLoading: false
  })),
  on(SparePartsActions.searchSparePartsFailure, (state, {error}) => ({ ...state, error}))
);

export const { selectIds, selectEntities, selectAll, selectTotal} = adapter.getSelectors()
