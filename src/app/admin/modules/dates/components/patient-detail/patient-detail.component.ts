import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'admin-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.sass']
})
export class PatientDetailComponent implements OnInit {

  @Input() public patient: any;
  @Input() public isAdminInput?: boolean;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
