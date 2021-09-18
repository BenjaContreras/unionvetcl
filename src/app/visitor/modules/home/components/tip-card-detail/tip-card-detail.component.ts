import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tip-card-detail',
  templateUrl: './tip-card-detail.component.html',
  styleUrls: ['./tip-card-detail.component.sass']
})
export class TipCardDetailComponent implements OnInit {

  @Input() public url: string;
  @Input() public title: string;
  @Input() public content: string;

  constructor() {
    this.url = '';
    this.title = '';
    this.content = '';
  }

  ngOnInit(): void {
  }

}