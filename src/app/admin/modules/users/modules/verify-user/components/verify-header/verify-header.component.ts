import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelperService } from '@core/services/helper/helper.service';
import { RecentVerifiedModalComponent } from '../recent-verified-modal/recent-verified-modal.component';

@Component({
  selector: 'app-verify-header',
  templateUrl: './verify-header.component.html',
  styleUrls: ['./verify-header.component.sass']
})
export class VerifyHeaderComponent implements OnInit {

  constructor(
    public helper: HelperService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.dialog.open(RecentVerifiedModalComponent, {
      width: '800px',
      data: {
        usersVerified: this.helper.recentEditedContacts,
      }
    });
  };
}
