import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {PrimeNGConfig} from "primeng/api";
import {SparePart, SparePartsFacade} from "../data-access-spareparts/application/spare-parts.facade";

export enum SparePartStatus {
  NEW = 'new',
  REPAIRED = 'repaired',
  ALTERNATIVE = 'alternative'
}

const templateTextNew = "<b style='font-size: 14px'>Genuine Parts</b> <br><span style='font-size: 12px'> Genuine John Deere Parts are your best choice for your newer machines.</span>";


@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsPageComponent implements OnInit {
  filter$: BehaviorSubject<string>;
  // spareParts$: Observable<SparePart[]> = this.sparePartsFacade.getAllMockSpareParts();
  filteredSpareParts: Observable<SparePart[]>;
  types: any;
  control: FormControl;
  selectedType: string;
  public status = SparePartStatus;
  isShownPhoneNumber: boolean;
  displayPosition: boolean;
  position: string;
  templateTextNew: string;
  searchValue: string;


  // loading$: Observable<boolean> = this.sparePartsFacade.loading$;
  // spareParts$: Observable<SparePart[]> = this.sparePartsFacade.allSpareParts$;
  spareParts$ = this.sparePartsFacade.getSearchSpareParts('M806418');
  noResults$: Observable<boolean>;

  constructor(private sparePartsFacade: SparePartsFacade, private primengConfig: PrimeNGConfig) {

    this.types = [
      {name: 'All', code: 'all'},
      {name: 'Нові', code: 'new'},
      {name: 'Відновлені', code: 'repaired'},
      {name: 'Альтернативні', code: 'alternative'},
    ];

  }

  ngOnInit(): void {
    this.filter$ = new BehaviorSubject("all");
    // this.filteredSpareParts = this.createFilterSpareParts(this.filter$, this.spareParts$);
    this.control = new FormControl(this.types[0].name);
    this.isShownPhoneNumber = false;
    this.primengConfig.ripple = true;

    this.templateTextNew = templateTextNew;

    // this.spareParts$.subscribe(data => console.log(data));
    // this.loading$.subscribe(data => console.log(data));
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


  public searchItems(e: any): void {
    console.log(this.searchValue);

    // this.sparePartsFacade.searchSpareParts(this.searchValue).subscribe();

    this.sparePartsFacade.getSearchSparePart(this.searchValue);
  }
}
