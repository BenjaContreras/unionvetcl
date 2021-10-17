import { Component, HostListener, OnInit } from '@angular/core';
import { PublicationProviderService } from '@core/providers/publications/publication-provider.service';
import { TipProviderService } from '@core/providers/tips/tip-provider.service';
import { Tip } from '@models/tip.model';
import { Publication } from '@models/publication.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  public tips: Tip[];
  public publications: Publication[];

  constructor(
    private tipProviderService: TipProviderService,
    private publicationProviderService: PublicationProviderService
  ) {
    window.scroll(0, 0);
    this.getScreenSize();
    this.tips = [];
    this.publications = [];
  }

  async ngOnInit() {
    window.scroll(0, 0);
    this.tips = await this.getAllTips();
    this.publications = await this.getAllPublications();
  }

  public async getAllTips(): Promise<Tip[]> {
    try {
      const tips: Tip[] = await this.tipProviderService
        .getAllTips()
        .toPromise();
      if (tips) {
        return tips;
      } else return [];
    } catch (error) {
      return [];
    }
  }

  public async getAllPublications(): Promise<Publication[]> {
    try {
      const publication: Publication[] = await this.publicationProviderService
        .getAllPublications()
        .toPromise();
      if (publication) {
        return publication;
      } else return [];
    } catch (error) {
      return [];
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
