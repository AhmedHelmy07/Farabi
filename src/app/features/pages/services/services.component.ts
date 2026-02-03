import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { FeaturesSectionComponent } from "../../../shared/components/features-section/features-section.component";
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";
import { ProcessComponent } from "../../../shared/components/process/process.component";
import { IndustriesServicesComponent } from './industries-services/industries-services.component';
import { CardServiceComponent } from './card-service/card-service.component';

@Component({
  selector: 'app-services',
    imports: [CommonModule, TranslateModule, CompanyOverviewComponent,CardServiceComponent, FeaturesSectionComponent,IndustriesServicesComponent,
      CtaActionComponent, ProcessComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  paragraph="Contact us today to discuss your workforce and project management needs";


  type=[
  {
    icon: 'fa-solid fa-user-group',
    title: 'Workforce Recruitment',
    paragraph: 'Comprehensive talent acquisition services across all skill levels and industries',
    statement1:'Skilled and unskilled labor recruitment',
    statement2:'Technical and professional staffing',
    statement3:'Background checks and verification',
    statement4:'Skills assessment and training'
  },
    {
    icon: "fa-solid fa-clipboard-check" ,
    title: 'Project Management',
    paragraph: 'End-to-end project oversight ensuring on-time and on-budget delivery',
    statement1:'Project planning and scheduling',
    statement2:'Resource allocation and management',
    statement3:'Quality control and compliance',
    statement4:'Risk management and mitigation'
  },  
    {
    icon: "fa-solid fa-city",
    title: 'Site Management',
    paragraph: 'On-site supervision and coordination for construction and industrial projects',
    statement1:'Daily site supervision',
    statement2:'Safety management and compliance',
    statement3:'Subcontractor coordination',
    statement4:'Progress monitoring and reporting'
  },
    {
    icon: 'fa-solid fa-gear',
    title: 'Operations Support',
    paragraph: 'Ongoing operational assistance for smooth business functioning',
    statement1:'Process optimization',
    statement2:'Logistics coordination',
    statement3:'Vendor management',
    statement4:'Administrative support'
  },

    {
    icon: 'fa-solid fa-shield',
    title: 'Compliance & Legal',
    paragraph: 'Navigate Egyptian regulations and legal requirements with confidence',
    statement1:'Work permit processing',
    statement2:'Labor law compliance',
    statement3:'Contract management',
    statement4:'Government liaison services'
  },
    {
    icon: 'fa-solid fa-headset',
    title: 'Consulting Services',
    paragraph: 'Strategic guidance for market entry and business expansion',
    statement1:'Market research and analysis',
    statement2:'Business setup assistance',
    statement3:'Cultural training and orientation',
    statement4:'Strategic planning support'
  },
  ]

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
