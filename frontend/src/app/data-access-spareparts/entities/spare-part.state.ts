import {EntityState} from "@ngrx/entity";
import {SparePart} from "../application/spare-parts.facade";


export interface SparePartState extends EntityState<SparePart> {
  error?: any;

  isLoading: boolean;
}
