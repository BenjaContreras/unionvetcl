import { DateScreenComponent } from '@admin/modules/dates/screens/date-screen/date-screen.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarModalComponent } from '../calendar-modal/calendar-modal.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public inHome: boolean;
  public isSmall: boolean;
  public size: string;

  constructor(private router: Router, private dialog: MatDialog) {
    this.inHome = true;
    this.isSmall = false;
    this.size = '22px';
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  public goTo(route: string): void {
    this.router.navigate([`visitor/${route}`]);
  };

  public getCurrentRoute(): void {
    if (this.router.url === 'visitor/login') this.inHome = false;
    else this.inHome = true;
  }

  public getCurrentScreenSize(size: number): void  {
    if (size < 1779) this.isSmall = true;
    else this.isSmall = false;
  };

  public getCurrentScreenSizeForLogo(size: number): boolean  {
    if (size < 1290) return false;
    else return true;
  };

  public getSize(screenWidth: number): boolean {
    if (screenWidth <= 1400) {
      this.size = '21px';
      return true;
    } else {
      if (screenWidth < 1300) {
        this.size = '20px';
        return true;
      } else {
        if (screenWidth <= 1150) {
          this.size = '16px';
          return true;
        } else return false;
      }
    };
  }

  public getSizeOfLogo(screenWidth: number): boolean {
    if (screenWidth <= 1400) {
      this.size = '17px';
      return true;
    } else {
      if (screenWidth <= 1290) {
        this.size = '13px';
        return true;
      } else return false;
    };
  }

  public openCalendarModal(): void {
    if (this.getScreenSize() >= 1150){
      this.dialog.open(DateScreenComponent, {
        width: '1000px',
        height: '98%',
        data: {
          isVisitor: true
        }
      });
    } else {
      this.dialog.open(CalendarModalComponent, {
        width: '600px',
        height: '80%',
      });
    };
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.getCurrentScreenSize(window.innerWidth);
    this.getSize(window.innerWidth);
    return window.innerWidth;
  }
}