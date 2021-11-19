import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelperService } from '@core/services/helper/helper.service';
import { User } from '@models/user.models';

@Component({
  selector: 'app-recent-verified-modal',
  templateUrl: './recent-verified-modal.component.html',
  styleUrls: ['./recent-verified-modal.component.sass']
})
export class RecentVerifiedModalComponent implements OnInit {

  public users: User[] | null;

  constructor(
    private dialogRef: MatDialogRef<RecentVerifiedModalComponent>,
    private helper: HelperService,
    @Inject(MAT_DIALOG_DATA) public data: { usersVerified: User[] }
  ) {
    if (data.usersVerified) this.users = data.usersVerified;
    else this.users = null;
  }

  ngOnInit(): void {
  }

  public cleanAll(): void {
    this.helper.refreshVerifiedUsers();
    this.dialogRef.close();
  };
}
