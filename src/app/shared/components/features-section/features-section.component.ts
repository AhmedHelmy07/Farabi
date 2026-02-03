import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-features-section',
  imports: [CommonModule, TranslateModule],
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
