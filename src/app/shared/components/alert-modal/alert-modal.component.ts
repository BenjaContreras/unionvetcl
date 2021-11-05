import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token/token.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.sass']
})
export class AlertModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      message: string,
      buttonText: string[]
    },
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  onClick(event?: string) {
    this.dialogRef.close();
    if (event){
      this.router.navigate(['visitor/home']);
      this.tokenService.removePasswordToken();
    };
  };
}
