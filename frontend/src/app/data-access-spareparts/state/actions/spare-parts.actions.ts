import {createAction, props} from "@ngrx/store";
import {SparePart} from "../../application/spare-parts.facade";


export const load = createAction('SPAREPARTS: LOAD_SPARE_PARTS', props<{ spareParts: string }>());

export const loadSuccess = createAction('SPAREPARTS: LOAD_SPARE_PARTS_SUCCEEDED', props<{ spareParts: any[] }>());
export const loadFailure = createAction('SPAREPARTS: LOAD_SPARE_PARTS_FAILED', props<{ error: unknown }>());
export const clear = createAction('SPAREPARTS: LOAD_SPARE_PARTS_CLEAR');

export const searchSpareParts = createAction('SPAREPARTS: SEARCH_SPARE_PARTS', props<{ searchQuery: string }>());
export const searchSparePartsSuccess = createAction('SPAREPARTS: SEARCH_SPARE_PARTS_SUCCEEDED', props<{ spareParts: SparePart[] }>());
export const searchSparePartsFailure = createAction('SPAREPARTS: SEARCH_SPARE_PARTS_FAILED', props<{ error: unknown }>());
export const clearSearchSpareParts = createAction('SPAREPARTS: SEARCH_SPARE_PARTS_CLEAR');
