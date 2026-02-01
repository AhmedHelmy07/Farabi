import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position-career',
  imports: [CommonModule],
  templateUrl: './position-career.component.html',
  styleUrl: './position-career.component.scss'
})
export class PositionCareerComponent {

@Input() types: {
  title: string;
  paragraph: string;
  statement:string;
  location:string;
}[] = [];

}
