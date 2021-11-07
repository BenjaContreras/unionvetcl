import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip-screen',
  templateUrl: './tip-screen.component.html',
  styleUrls: ['./tip-screen.component.sass']
})
export class TipScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentRoute(): number {
    let url = this.router.url;
    if (url === '/admin/publicaciones/tips/crear-tip') return 1;
    else if (url === '/admin/publicaciones/tips/actualizar-tip') return 2;
    else if (url === '/admin/publicaciones/tips/lista-tips') return 3;
    else return 0; // Error
  }
}
