import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelperService } from '@core/services/helper/helper.service';
import { Contact } from '@models/contact.model';

@Component({
  selector: 'app-recent-edited-modal',
  templateUrl: './recent-edited-modal.component.html',
  styleUrls: ['./recent-edited-modal.component.sass']
})
export class RecentEditedModalComponent implements OnInit {

  public contacts: Contact[] | null;

  constructor(
    private dialogRef: MatDialogRef<RecentEditedModalComponent>,
    private helper: HelperService,
    @Inject(MAT_DIALOG_DATA) public data: { contactsEdited: Contact[] }
  ) {
    if (data.contactsEdited) this.contacts = data.contactsEdited;
    else this.contacts = null;
  }

  ngOnInit(): void {
  }

  public cleanAll(): void {
    this.helper.refreshEditedContacts();
    this.dialogRef.close();
  };

}
