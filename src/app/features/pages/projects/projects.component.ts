import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule, CompanyOverviewComponent, CtaActionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
paragraph=" Let's discuss how we can help bring your vision to life"

}
