import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goTo(route: string): void {
    this.router.navigate([`visitor/${route}`]);
  };

  public goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}
