import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-leadership-team',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './leadership-team.component.html',
  styleUrl: './leadership-team.component.scss'
})
export class LeadershipTeamComponent {
@Input() features: {
  imageUrl: string;
  title: string;
  paragraph: string;
  statement:string
}[] = [];


}

