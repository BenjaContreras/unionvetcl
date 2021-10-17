import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.sass']
})
export class ListDetailComponent implements OnInit {

  public products: any[];
  constructor() { 
    this.products = [
      {id: 1, name: 'Vacuna Pfizer', cantidad: 40, updated: '02/07/2021'},
      {id: 2, name: 'Vacuna Sinovac', cantidad: 35, updated: '14/08/2021'},
      {id: 3, name: 'Vacuna Astrazeneca', cantidad: 2, updated: '01/05/2020'},
      {id: 4, name: 'Vacuna Coronavac', cantidad: 4, updated: '02/04/2021'},
      {id: 5, name: 'Delipets', cantidad: 13, updated: '17/07/2020'},
      {id: 6, name: 'Happy cats', cantidad: 42, updated: '20/02/2019'},
      {id: 7, name: 'Cannes', cantidad: 21, updated: '22/03/2021'},
      {id: 8, name: 'Champion cat', cantidad: 10, updated: '13/09/2020'},
      {id: 9, name: 'Champion dog', cantidad: 9, updated: '07/06/2018'},
      {id: 10, name: 'Royal canin', cantidad: 5, updated: '02/12/2019'},
    ]
  }

  ngOnInit(): void {
  }

}
