import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tip-detail',
  templateUrl: './tip-detail.component.html',
  styleUrls: ['./tip-detail.component.sass']
})
export class TipDetailComponent implements OnInit {

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