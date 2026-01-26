import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",loadComponent :()=>import('./features/pages/home/home.component').then(c=>c.HomeComponent)},
    {path:"about",loadComponent :()=>import('./features/pages/about/about.component').then(c=>c.AboutComponent)},
    {path:"services",loadComponent :()=>import('./features/pages/services/services.component').then(c=>c.ServicesComponent)},
    {path:"project",loadComponent :()=>import('./features/pages/projects/projects.component').then(c=>c.ProjectsComponent)},
    {path:"team",loadComponent :()=>import('./features/pages/team/team.component').then(c=>c.TeamComponent)},
    {path:"career",loadComponent :()=>import('./features/pages/careers/careers.component').then(c=>c.CareersComponent)},
    {path:"contact",loadComponent :()=>import('./features/pages/contact/contact.component').then(c=>c.ContactComponent)},
    {path:"faq",loadComponent :()=>import('./features/pages/faq/faq.component').then(c=>c.FaqComponent)},

    {path:"**",loadComponent :()=>import('./core/pages/not-found/not-found.component').then(c=>c.NotFoundComponent)},
];
