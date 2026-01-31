import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-overview',
  imports: [RouterLink],
  templateUrl: './company-overview.component.html',
  styleUrl: './company-overview.component.scss'
})
export class CompanyOverviewComponent {
  @Input() titleOverview!:string
  @Input() paragraphOverview!:string;

}
