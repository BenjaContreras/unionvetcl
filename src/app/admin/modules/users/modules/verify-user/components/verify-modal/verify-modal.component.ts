import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { User } from '@models/user.models';

@Component({
  selector: 'app-verify-modal',
  templateUrl: './verify-modal.component.html',
  styleUrls: ['./verify-modal.component.sass']
})
export class VerifyModalComponent implements OnInit {

  public isLoading: boolean;

  constructor(
    private helper: HelperService,
    private dialogRef: MatDialogRef<VerifyModalComponent>,
    private userP: UserProviderService,
    private notifications: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) { 
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  public async verifiedUser(){
    this.isLoading = true;
    let user: User = this.data.user;
    user.isVerified = true;
    user.updatedAt = new Date();
    try {
      const result = await this.userP.updateUser(user._id!, user).toPromise();
      if (result) this.isLoading = false;
      this.notifications.success('Usuario verificado con éxito');
      this.helper.recentVerifiedUsers.push(user);
    } catch (e) {
      console.log(e);
      this.isLoading = false;
      this.notifications.error('Error al verificar usuario');
    }
  }
}
