import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-filters-inline',
  templateUrl: './filters-inline.component.html',
  styleUrls: ['./filters-inline.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FiltersInlineComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() categories: string[];
  @Input() brands: string[];
  @Input() brandSelected: string | null;
  @Input() categorySelected: string | null;
  @Output() categoriesSelected: EventEmitter<string>;
  @Output() brandsSelected: EventEmitter<string>;
  @Output() cleanData: EventEmitter<any>;
  public loadingCategories: boolean;
  public loadingBrands: boolean;

  public categoryFrmCtrl: FormControl = new FormControl(null);
  public categoryFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredCategories: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  public brandsFrmCtrl: FormControl = new FormControl(null);
  public brandFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredBrands: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  protected onDestroy = new Subject<void>();

  @ViewChild('multipleSelect') singleSelect!: MatSelect;
  @ViewChild('multiplSelect') singleSelectBrands!: MatSelect;

  constructor() { 
    this.categories = [];
    this.brands = [];
    this.loadingBrands = true;
    this.loadingCategories = true;
    this.categoriesSelected = new EventEmitter<string>();
    this.brandsSelected = new EventEmitter<string>();
    this.cleanData = new EventEmitter<any>();
    this.brandSelected = null;
    this.categorySelected = null;
  }

  async ngOnInit(): Promise<void> {
    this.categoryFrmCtrl.setValue(null);
    this.filteredCategories.next(this.categories.slice());
    this.categoryFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterCategories();
      });
    this.brandsFrmCtrl.setValue(null);
    this.filteredBrands.next(this.brands.slice());
    this.brandFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterBrands();
      });
  }

  async ngAfterViewInit(): Promise<void> {
    await this.setInitialValue();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.categories) {
      await this.ngOnInit();
      this.loadingCategories = false;
    };
    if (changes.brands) {
      await this.ngOnInit();
      this.loadingBrands = false;
    };
    if (changes.brandSelected) {
      this.brandsFrmCtrl.setValue(this.brandSelected);
    }
    if (changes.categorySelected) {
      this.categoryFrmCtrl.setValue(this.categorySelected);
    }
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  protected async setInitialValue(): Promise<void> {
    this.filteredCategories
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
    });
    this.filteredBrands
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelectBrands.compareWith = (a: any, b: any) => a && b && a === b;
    });
  };

  protected filterCategories(): void {
    if (!this.categories) return;
    let search = this.categoryFrmFilterCtrl.value;
    if (!search) {
      this.filteredCategories.next(this.categories.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredCategories.next(
      this.categories.filter(category => category.toLowerCase().includes(search))
    );
  };

  protected filterBrands(): void {
    if (!this.brands) return;
    let search = this.brandFrmFilterCtrl.value;
    if (!search) {
      this.filteredBrands.next(this.brands.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredBrands.next(
      this.brands.filter(brand => brand.toLowerCase().includes(search))
    );
  };

  public selectionChange(event: any): void {
    this.categoriesSelected.emit(this.categoryFrmCtrl.value);
  }

  public selectionChangeBrands(event: any): void {
    this.brandsSelected.emit(this.brandsFrmCtrl.value);
  }

  public cleanFilters(): void {
    this.categoryFrmCtrl.setValue(null);
    this.brandsFrmCtrl.setValue(null);
    this.cleanData.emit('clean');
  }
}
