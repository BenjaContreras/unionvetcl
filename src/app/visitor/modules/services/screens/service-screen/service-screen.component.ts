import { Component, OnInit, OnChanges } from '@angular/core';
import { SrviceService } from '@core/providers/service/srvice.service';
import { Service } from '@models/service.model';
import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y, Autoplay, EffectFade]);

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.sass']
})
export class ServiceScreenComponent implements OnInit, OnChanges {

  public service: Service | null;
  public selectedServiceId: string;
  public services : Service[];

  constructor(private serviceService: SrviceService) {
    this.selectedServiceId = 'Aplicación de microchip';
    this.service = null;
    this.services = [];
  }

  async ngOnInit(): Promise<void> {
    await this.serviceIdReciver(this.selectedServiceId);
    console.log(this.services)
  }

  async ngOnChanges(): Promise<void> {
    await this.serviceIdReciver(this.selectedServiceId);
  }

  public async getAllServicess(): Promise<Service[]> {
    try {
      const service: Service[] = await this.serviceService
        .getAllServices()
        .toPromise();
      if (service) {
        return service;
      } else return [];
    } catch (error) {
      return [];
    }
  }

  public async serviceIdReciver(title: string) {
    this.selectedServiceId = title;
    this.service = await this.serviceService.getService(this.selectedServiceId);
  };
}
