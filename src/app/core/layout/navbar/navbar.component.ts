import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslateModule, RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translate = inject(TranslateService)
  setLang(lang: string) {
    this.translate.use(lang);
    try {
      if (typeof localStorage !== 'undefined' && localStorage.setItem) {
        localStorage.setItem('lang', lang);
      }
    } catch {}

    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  onLangChange(e: Event) {
    const v = (e.target as HTMLSelectElement | null)?.value;
    if (v) this.setLang(v);
  }
}
