import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelperService } from '@core/services/helper/helper.service';
import { Contact } from '@models/contact.models';
import { RecentEditedModalComponent } from '../recent-edited-modal/recent-edited-modal.component';

@Component({
  selector: 'app-response-header',
  templateUrl: './response-header.component.html',
  styleUrls: ['./response-header.component.sass']
})
export class ResponseHeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public helper: HelperService
  ) { }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.dialog.open(RecentEditedModalComponent, {
      width: '800px',
      data: {
        contactsEdited: this.helper.recentEditedContacts,
      }
    });
  };
}
