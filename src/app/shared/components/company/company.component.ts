import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-company',
  imports: [CommonModule, RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
  standalone:true
})
export class CompanyComponent {


  @Input() title!: string;
  @Input() paragraph! :string[]
  @Input() imageURL!:string;
  @Input() link!: string;
  @Input() linkURL!: string;

}
