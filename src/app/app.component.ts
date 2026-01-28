import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./features/pages/home/home.component";
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { FlowbiteService } from './shared/service/flowbit.service';
import { initFlowbite } from 'flowbite';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title =  'app';
  _flowbiteService=inject(FlowbiteService)
  constructor() {}

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
console.log("loaded",flowbite);
    })
  }
  }
