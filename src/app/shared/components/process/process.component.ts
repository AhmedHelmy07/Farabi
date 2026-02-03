import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-process',
  imports: [CommonModule, TranslateModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  @Input() background!:string
@Input() title!: string;
@Input() description!: string;
@Input() features: {
  number: string;
  title: string;
  text: string;
}[] = [];
}
