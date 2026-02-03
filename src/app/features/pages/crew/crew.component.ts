import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CrewTableComponent } from '../../../shared/components/crew-table/crew-table.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-crew',
  imports: [CommonModule, TranslateModule, CompanyOverviewComponent, CrewTableComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
  // Example standard crew composition
  standardCrew = [
    { role: 'Translator / Interpreter', count: 1 },
    { role: 'Safety Engineer', count: 1 },
    { role: 'Civil Engineer', count: 1 },
    { role: 'Supervisors', count: 2 },
    { role: 'Foremen', count: 3 },
    { role: 'Skilled Workers', count: 60 },
    { role: 'Helpers / Assistants', count: 20 },
  ];
}
