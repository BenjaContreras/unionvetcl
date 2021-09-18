import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'home-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.sass']
})
export class PublicationsComponent implements OnInit {

  public url: string[];

  constructor() {
    this.url = [];
    this.getScreenSize();
    urls.forEach((urlA: any) => this.url.push(urlA.link));
  }

  ngOnInit(): void {
  }

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