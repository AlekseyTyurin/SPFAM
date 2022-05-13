import {createAction, props} from "@ngrx/store";


export const load = createAction('SPAREPARTS: LOAD_SPARE_PARTS', props<{ spareParts: string }>());

export const loadSuccess = createAction('SPAREPARTS: LOAD_SPARE_PARTS_SUCCEEDED', props<{ spareParts: any[] }>());
export const loadFailure = createAction('SPAREPARTS: LOAD_SPARE_PARTS_FAILED', props<{ error: unknown }>());
export const clear = createAction('SPAREPARTS: LOAD_SPARE_PARTS_CLEAR');
