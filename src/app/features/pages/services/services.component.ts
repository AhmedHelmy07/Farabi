import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { FeaturesSectionComponent } from "../../../shared/components/features-section/features-section.component";
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";
import { ProcessComponent } from "../../../shared/components/process/process.component";

@Component({
  selector: 'app-services',
  imports: [CompanyOverviewComponent, FeaturesSectionComponent, CtaActionComponent, ProcessComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  paragraph="Contact us today to discuss your workforce and project management needs";

  feature=[
  {
    number: '01',
    title: 'Discovery',
    text: 'Understanding your needs and requirements'
  },
  {
    number: '02',
    title: ' Planning',
    text: 'Developing a customized solution strategy'   
  },
  {
    number: '03',
    title: 'Execution ',
    text: 'Implementing and managing the project'   

  },
  {
    number: '04',
    title: 'Support',
    text: 'Ongoing support and optimization'   
  }
    
  ]


}
