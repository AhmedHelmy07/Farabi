import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-action',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './cta-action.component.html',
  styleUrl: './cta-action.component.scss'
})
export class CtaActionComponent {
  @Input() textColorTitle!: string 
  @Input() textColorParagraph!: string 
  @Input() bgClass!: string 
  @Input() title!:string;
  @Input() paragraphCTA!:string;
  @Input() linkurlCTS!:string;
  @Input() linkCTA!:string;

}
