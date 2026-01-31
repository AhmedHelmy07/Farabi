import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CtaActionComponent } from '../../../shared/components/cta-action/cta-action.component';
import { StatCardsteamComponent } from "./stat-cards-team/stat-cards-team.component";

@Component({
  selector: 'app-team',
  imports: [CompanyOverviewComponent, CtaActionComponent, StatCardsteamComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
paragraph="We're always looking for talented individuals to join our growing team"

}
