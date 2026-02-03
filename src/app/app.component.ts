import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomeComponent } from "./features/pages/home/home.component";
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { FlowbiteService } from './shared/service/flowbit.service';
import { initFlowbite } from 'flowbite';
import { ToastComponent } from './shared/components/toast/toast.component';
 

@Component({
  selector: 'app-root',
  imports: [CommonModule, TranslateModule, RouterOutlet, NavbarComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title =  'app';
  _flowbiteService=inject(FlowbiteService)
  translate = inject(TranslateService)
  constructor() {}

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
console.log("loaded",flowbite);
    })
    let saved = 'en';
    try {
      if (typeof localStorage !== 'undefined' && localStorage.getItem) {
        saved = localStorage.getItem('lang') || (typeof navigator !== 'undefined' ? navigator.language?.split('-')[0] : 'en') || 'en';
      } else if (typeof navigator !== 'undefined') {
        saved = navigator.language?.split('-')[0] || 'en';
      }
    } catch {
      saved = (typeof navigator !== 'undefined' ? navigator.language?.split('-')[0] : 'en') || 'en';
    }
    const lang = saved && saved.startsWith('ar') ? 'ar' : 'en';
    this.translate.use(lang);
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }
  }
