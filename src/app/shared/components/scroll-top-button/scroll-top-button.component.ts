import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.sass']
})
export class ScrollTopButtonComponent implements OnInit, OnChanges {

  public windowScrolled: boolean;
  public yZone: string;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.windowScrolled = false;
    this.yZone = this.onWindowScroll();
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  ngOnChanges(): void {
    this.yZone = this.onWindowScroll();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) this.windowScrolled = true;
    else {
      if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) this.windowScrolled = false;
    }
    if (document.documentElement.scrollTop > 2180) return this.yZone = 'white';
    else return this.yZone = '#0F7499';
  }
  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.scrollTo(0, 0);
        }
    })();
  }
}