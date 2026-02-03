import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./features/pages/home/home.component";
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { FlowbiteService } from './shared/service/flowbit.service';
import { initFlowbite } from 'flowbite';
import { ToastComponent } from './shared/components/toast/toast.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent],
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
    const saved = localStorage.getItem('lang') || navigator.language?.split('-')[0] || 'en';
    const lang = saved.startsWith('ar') ? 'ar' : 'en';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
  }
