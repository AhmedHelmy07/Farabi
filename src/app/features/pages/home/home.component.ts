import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { StatCardsComponent } from './stat-cards/stat-cards.component';
import { ServiceCardComponent } from "../../../shared/components/service-card/service-card.component";
import { CompanyComponent } from "../../../shared/components/company/company.component";
import { CtaActionComponent } from '../../../shared/components/cta-action/cta-action.component';
import { FeaturesSectionComponent } from "../../../shared/components/features-section/features-section.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, StatCardsComponent, ServiceCardComponent, CompanyComponent, CtaActionComponent, FeaturesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
paragraph=" Let's discuss how we can help you achieve your goals in Egypt"
feature=[
  {
    icon: 'fa-solid fa-user-group',
    title: 'Expert Workforce',
    text: 'Access highly skilled professionals across multiple industries.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Project Management',
    text: 'End-to-end project oversight and execution.'
  },
  {
    icon: 'fa-solid fa-check-circle',
    title: 'Quality Assurance',
    text: 'Rigorous quality control and compliance standards.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Fast Deployment',
    text: 'Rapid mobilization and project kickoff.'
  }
]



}
