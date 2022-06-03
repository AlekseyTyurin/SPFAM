import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SparePartState} from "../../entities";
import {selectAll, selectEntities} from "../reducers/spare-parts.reducers";


export const selectSparePartsState = createFeatureSelector<SparePartState>('sparePartsData');

export const selectSparePartsStateIsLoading = createSelector(selectSparePartsState, x => x.isLoading);
export const selectSparePartsEntities = createSelector(selectSparePartsState, selectEntities);
export const selectAllSpareParts = createSelector(selectSparePartsState, selectAll);
