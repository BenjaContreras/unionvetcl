import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'products-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.sass']
})
export class SideFiltersComponent implements OnInit {

  @Input() length: number;
  @Input() categories: {name: string, length: number}[];
  @Input() brands: {name: string, length: number}[];
  public categoriesForm: FormGroup;
  public brandsForm: FormGroup;
  public valorationsForm: FormGroup;
  public valorations: number[];

  constructor(private formBuilder: FormBuilder) { 
    this.valorations = [5, 4, 3, 2, 1];
    this.categoriesForm = this.formBuilder.group({
      dragpharma: false,
      traper: false,
      bayer: false,
      frontline_labs: false,
      microsules: false
    });
    this.brandsForm = this.formBuilder.group({
      antiparasitario: false,
      medicamento: false,
      suplemento: false,
      shampoo: false
    });
    this.valorationsForm = this.formBuilder.group({
      5: false,
      4: false,
      3: false,
      2: false,
      1: false
    });
    this.categories = [{name: '', length:0}];
    this.brands = [{name: '', length:0}];
    this.length = 0;
  }

  ngOnInit(): void {
  }

  public changeValue(event: any){
    console.log(event.value);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
