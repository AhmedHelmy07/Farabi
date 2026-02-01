import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CtaActionComponent } from '../../../shared/components/cta-action/cta-action.component';
import { StatCardsteamComponent } from "./stat-cards-team/stat-cards-team.component";
import { ExpertiseTeamComponent } from "./expertise-team/expertise-team.component";
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { DepartmentTeamComponent } from "./department-team/department-team.component";

@Component({
  selector: 'app-team',
  imports: [CompanyOverviewComponent, CtaActionComponent, StatCardsteamComponent, ExpertiseTeamComponent, LeadershipTeamComponent, DepartmentTeamComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
paragraph="We're always looking for talented individuals to join our growing team"

feature=[
  {
    imageUrl:"images/photo-1758518731457-5ef826b75b3b.jfif",
    title:"Ahmed Hassan",
    paragraph:"CEO &amp; Founder",
    statement:"20+ years of experience in workforce management and international business development"
  },
  {
    imageUrl:"images/photo-1.jfif",
    title:"Sarah Mohamed",
    paragraph:"Chief Operations Officer",
    statement:"Expert in project management with extensive experience in large-scale infrastructure projects"
  },
  {
    imageUrl:"images/photo-2.jfif",
    title:"Omar Khalil",
    paragraph:"Director of Client Services",
    statement:"Specialized in building and maintaining strong relationships with international clients"
  },
  {
    imageUrl:"images/photo-3.jfif",
    title:"Fatima Ali",
    paragraph:"Head of Recruitment",
    statement:"15+ years connecting top talent with career opportunities across multiple industries"
  }
]

}
