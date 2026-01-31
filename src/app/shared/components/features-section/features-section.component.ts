import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features-section',
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
  @Input() background!:string
  @Input() border!:string
@Input() title!: string;
@Input() description!: string;
@Input() features: {
  icon: string;
  title: string;
  text: string;
}[] = [];

}
