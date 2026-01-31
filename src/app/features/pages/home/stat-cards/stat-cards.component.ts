import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-cards',
  imports: [],
  templateUrl: './stat-cards.component.html',
  styleUrl: './stat-cards.component.scss'
})
export class StatCardsComponent {
@Input() background!:string;

}
