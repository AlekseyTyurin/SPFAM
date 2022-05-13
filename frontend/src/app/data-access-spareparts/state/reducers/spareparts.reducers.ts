import {createReducer, on} from "@ngrx/store";
import * as SparePartsActions from '../actions/spareparts.actions';
interface SparePartsState {
  spareParts: any;
}

const initialState: SparePartsState = {
  spareParts: undefined
};

export const sparePartsReducer = createReducer(
initialState,
  on(SparePartsActions.load, (state, action) => {
    return {
      spareParts: action.spareParts
    };
  })
);
