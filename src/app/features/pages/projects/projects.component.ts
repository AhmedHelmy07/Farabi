import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";

@Component({
  selector: 'app-projects',
  imports: [CompanyOverviewComponent, CtaActionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
paragraph=" Let's discuss how we can help bring your vision to life"

}
