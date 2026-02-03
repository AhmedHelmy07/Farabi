import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule, TranslateModule],
  templateUrl:'./contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {

}
