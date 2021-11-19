import { Component, HostListener, OnInit } from '@angular/core';
import { TipProviderService } from '@core/providers/tips/tip-provider.service';
import { Tip } from '@models/tip.models';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.sass']
})
export class LandingScreenComponent implements OnInit {

  public tips: Tip[];

  constructor(private tipP: TipProviderService) { 
    this.tips = [];
  }

  async ngOnInit(): Promise<void> {
    this.tips = await this.tipP.getAllTips().toPromise();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
