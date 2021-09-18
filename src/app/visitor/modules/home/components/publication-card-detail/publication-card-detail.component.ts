import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'home-publication-card-detail',
  templateUrl: './publication-card-detail.component.html',
  styleUrls: ['./publication-card-detail.component.sass']
})
export class PublicationCardDetailComponent implements OnInit {

  @Input() url: string;
  public safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = '';
  }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}