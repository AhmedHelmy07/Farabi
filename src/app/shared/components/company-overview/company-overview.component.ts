import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-company-overview',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './company-overview.component.html',
  styleUrl: './company-overview.component.scss'
})
export class CompanyOverviewComponent {
  @Input() titleOverview!:string
  @Input() paragraphOverview!:string;

}
