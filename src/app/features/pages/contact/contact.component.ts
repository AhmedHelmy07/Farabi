import { Component } from '@angular/core';
import { RequestFormComponent } from '../../../shared/components/request-form/request-form.component';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { ContactInfoComponent } from './contact-info/contact-info.component';

@Component({
  selector: 'app-contact',
  imports: [RequestFormComponent, CompanyOverviewComponent,ContactInfoComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
