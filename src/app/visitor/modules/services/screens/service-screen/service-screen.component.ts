import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { SrviceService } from '@core/providers/service/srvice.service';
import { Service } from '@models/service.models';
import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y, Autoplay, EffectFade]);

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.sass']
})
export class ServiceScreenComponent implements OnInit {

  public service: Service | null;
  public selectedServiceId: string;
  public services : Service[];

  constructor(private serviceService: SrviceService) {
    this.selectedServiceId = 'Aplicación de microchip';
    this.service = null;
    this.services = [];
  }

  async ngOnInit(): Promise<void> {
    this.services = await this.getAllServicess();
    await this.serviceIdReciver(this.selectedServiceId);
  }

  public async getAllServicess(): Promise<Service[]> {
    try {
      const services: Service[] = await this.serviceService.getAllServices().toPromise();
      if (services) return services;
      else return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public async serviceIdReciver(title: string) {
    this.selectedServiceId = title;
    this.service = this.services.find(service => service.name === title)!;
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
