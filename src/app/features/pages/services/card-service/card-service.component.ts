import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  imports: [CommonModule],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.scss'
})
export class CardServiceComponent {

@Input() types: {
  icon: string;
  title: string;
  paragraph: string;
  statement1: string;
  statement2: string;
  statement3: string;
  statement4: string;

}[] = [];
}
