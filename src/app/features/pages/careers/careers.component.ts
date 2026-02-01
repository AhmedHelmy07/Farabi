import { Component } from '@angular/core';
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CareerAtEgyWorkforceComponent } from "./career-at-egy-workforce/career-at-egy-workforce.component";
import { ProcessComponent } from "../../../shared/components/process/process.component";
import { PositionCareerComponent } from "./position-career/position-career.component";

@Component({
  selector: 'app-careers',
  imports: [CtaActionComponent, CompanyOverviewComponent, CareerAtEgyWorkforceComponent, ProcessComponent, 
    PositionCareerComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
paragraph=" Send us your resume and we'll keep you in mind for future opportunities"
title="Don't See the Right Position?"

  type=[
  {
    title: 'Senior Project Manager',
   paragraph: 'Project Management',
    statement: 'Lead andoversee multiple large-scale projects for international clients',
    location:'cairo'
  },
  {
    title: 'Recruitment Specialist',
   paragraph: 'HR & Recruitment',
    statement: 'Source, screen, and recruit top talent across various industries',
    location:'cairo'

  },
    {
    title: 'Operations Coordinator',
   paragraph: 'Operations',
    statement: 'Coordinate day-to-day operations and ensure smooth workflow',
    location:'Alexandria'

  },
    {
    title: 'Client Relations Manager',
   paragraph: 'Client Services',
    statement: 'Build and maintain strong relationships with international clients',
    location:'cairo'

  },
      {
    title: 'Site Supervisor',
   paragraph: 'Project Management',
    statement: 'Oversee on-site operations and manage workforce teams',
    location:'Multiple Locations'

  },
      {
    title: 'Legal & Compliance Officer',
   paragraph: 'Legal',
    statement: 'Ensure compliance with Egyptian labor laws and regulations' ,
         location:'cairo'

  }

  ]
  

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
