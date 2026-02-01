import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-faq',
  imports: [CompanyOverviewComponent,QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
