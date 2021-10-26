import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Publication } from '@models/publication.model';


@Component({
  selector: 'visitor-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.sass']
})
export class PublicationsListComponent implements OnInit {

  public url: string[];
  @Input() publications: Publication[];

  constructor() {
    this.url = [];
    this.getScreenSize();
    urls.forEach((urlA: any) => this.url.push(urlA.link));
    this.publications = [];
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.publications);
  }

  get widthForTip(): number {
    return this.getWidth();
  };

  get heigthForTip(): number {
    return this.getHeigth();
  };

  private getWidth(): number {
    if (this.getScreenSize() >= 710) return 320;
    else if (this.getScreenSize() >= 580 && this.getScreenSize() < 710) return 280
    else if (this.getScreenSize() >= 470 && this.getScreenSize() < 580) return 200
    else return 160;
  };

  private getHeigth(): number {
    if (this.getScreenSize() >= 710) return 529;
    else if (this.getScreenSize() >= 580 && this.getScreenSize() < 710) return 489
    else if (this.getScreenSize() >= 470 && this.getScreenSize() < 580) return 400
    else return 320;
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

}

const urls: any = [
  {link: 'https://www.instagram.com/p/CQOn4olJTrr/embed'},
  {link: 'https://www.instagram.com/p/CP3nLKvJ4rG/embed'},
  {link: 'https://www.instagram.com/p/CJekSXfJ5J8/embed'},
  {link: 'https://www.instagram.com/p/CFw3DZRJNi8/embed'},
  {link: 'https://www.instagram.com/p/CBPGyiEpi7g/embed'},
  {link: 'https://www.instagram.com/p/CBqXaMkJ1TW/embed'},
  {link: 'https://www.instagram.com/p/CA-iuL2JJgo/embed'},
  {link: 'https://www.instagram.com/p/CAvMR9OJe0f/embed'},
  {link: 'https://www.instagram.com/p/B91--qmp22w/embed'},
];