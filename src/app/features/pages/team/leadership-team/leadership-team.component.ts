import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-leadership-team',
  imports: [RouterLink,CommonModule],
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

