import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stat-cards',
  imports: [CommonModule, TranslateModule],
  templateUrl: './stat-cards.component.html',
  styleUrl: './stat-cards.component.scss'
})
export class StatCardsComponent {
@Input() background!:string;

}
