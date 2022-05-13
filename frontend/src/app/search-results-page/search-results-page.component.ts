import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SparePart, SparePartsService} from "../services/spare-parts.service";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {PrimeNGConfig} from "primeng/api";

export enum SparePartStatus {
  NEW = 'new',
  REPAIRED = 'repaired',
  ALTERNATIVE = 'alternative'
}

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsPageComponent implements OnInit {
  filter$: BehaviorSubject<string>;
  spareParts$: Observable<SparePart[]>;
  filteredSpareParts: Observable<SparePart[]>;
  types: any;
  control: FormControl;
  selectedType: string;
  public status = SparePartStatus;
  isShownPhoneNumber: boolean;
  displayPosition: boolean;
  position: string;

  constructor(private sparePartsFacade: SparePartsService, private primengConfig: PrimeNGConfig) {

    this.types = [
      {name: 'All', code: 'all'},
      {name: 'Нові', code: 'new'},
      {name: 'Відновлені', code: 'repaired'},
      {name: 'Альтернативні', code: 'alternative'},
    ];

  }

  ngOnInit(): void {
    this.filter$ = new BehaviorSubject("all");
    this.spareParts$ = this.sparePartsFacade.getAllMockSpareParts();

    this.filteredSpareParts = this.createFilterSpareParts(this.filter$, this.spareParts$);
    this.control = new FormControl(this.types[0].name);
    this.isShownPhoneNumber = false;
    this.primengConfig.ripple = true;
  }


  // tslint:disable-next-line:typedef
  public createFilterSpareParts(filter$: Observable<string>, spareParts$: Observable<SparePart[]>) {
    // tslint:disable-next-line:no-shadowed-variable
    return combineLatest([spareParts$, filter$], (spareParts: SparePart[], filter: string) => {
      if (filter === 'all') {
        return spareParts;
      }

      return spareParts.filter(
        (sparePart: SparePart) => sparePart.status === filter
      );
    });
  }

  public onFilterChange(event: any): void {
    this.filter$.next(event?.value?.code);
  }

  public showDialog(position: string): void {
    this.position = position;
    this.displayPosition = true;
  }

  public login(): void {
    this.displayPosition = false;
    this.isShownPhoneNumber = true;
  }
}
