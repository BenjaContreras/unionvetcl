import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Service } from '@models/service.model';

@Component({
  selector: 'services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.sass']
})
export class ServicesDetailComponent implements OnInit, OnChanges {

  @Input() public service: Service | null;
    this.service = null;

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }
}