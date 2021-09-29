import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Service } from '@models/service.model';

@Component({
  selector: 'services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.sass']
})
export class ServicesDetailComponent implements OnInit, OnChanges {

  @Input() public service: Service | null;
  public paragraph: string[];

  constructor() { 
    this.service = null;
    this.paragraph = [];
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.paragraph = [];
    this.service?.content.forEach(text => this.paragraph.push(text));
  }
}