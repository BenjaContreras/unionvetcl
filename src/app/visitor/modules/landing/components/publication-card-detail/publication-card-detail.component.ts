import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'publication-card-detail',
  templateUrl: './publication-card-detail.component.html',
  styleUrls: ['./publication-card-detail.component.sass']
})
export class PublicationCardDetailComponent implements OnInit {

  @Input() width: number;
  @Input() heigth: number;
  @Input() url: string;
  public safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = '';
    this.width = 0;
    this.heigth = 0;
  }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}