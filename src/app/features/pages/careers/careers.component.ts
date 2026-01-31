import { Component } from '@angular/core';
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CareerAtEgyWorkforceComponent } from "./career-at-egy-workforce/career-at-egy-workforce.component";
import { ProcessComponent } from "../../../shared/components/process/process.component";

@Component({
  selector: 'app-careers',
  imports: [CtaActionComponent, CompanyOverviewComponent, CareerAtEgyWorkforceComponent, ProcessComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
paragraph=" Send us your resume and we'll keep you in mind for future opportunities"
title="Don't See the Right Position?"
  feature=[
  {
    number: '1',
    title: 'Submit Application',
    text: 'Send us your resume and cover letter'
  },
  {
    number: '2',
    title: 'Initial Review',
    text: 'Our HR team reviews your application'   
  },
  {
    number: '3',
    title: 'Interview ',
    text: 'Meet with our hiring managers'   

  },
  {
    number: '4',
    title: 'Offer & Onboarding',
    text: 'Join the EgyWorkforce team'   
  }
    
  ]
}
