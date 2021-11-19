import { Component, OnInit } from '@angular/core';
import { DashboardProviderService } from '@core/providers/dashboard/dashboard.service';
import { Product } from '@models/product.models';

@Component({
  selector: 'admin-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.sass']
})
export class ListDetailComponent implements OnInit {

  public products: Product[];

  constructor(private dashP: DashboardProviderService) { 
    this.products = [];
  }

  async ngOnInit(): Promise<void> {
    this.products = await this.dashP.getProductsOfDashboard().toPromise();
  }

}
