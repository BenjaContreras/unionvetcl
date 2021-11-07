import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '@core/services/helper/helper.service';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrls: ['./redirect-component.component.sass']
})
export class RedirectComponentComponent implements OnInit {

  public categories: string[];

  constructor(
    private router: Router,
    private helperService: HelperService
  ) {
    this.categories = ['Lista de publicaciones', 'Subir publicación'];
  }

  ngOnInit(): void {
  }

  public goTo(url: string): void {
    this.router.navigate([`admin/${this.helperService.hendleRoutes(url)}`]);
  };
}