import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-media-screen',
  templateUrl: './social-media-screen.component.html',
  styleUrls: ['./social-media-screen.component.sass']
})
export class SocialMediaScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentRoute(): number {
    let url = this.router.url;
    if (url === '/admin/publicaciones/rrss/subir-publicacion') return 2;
    else if (url === '/admin/publicaciones/rrss/lista-publicaciones') return 1;
    else return 0; // Error
  }
}