import { Routes } from '@angular/router';
import { HomeComponent } from './src/app/features/home/home.component';
import { ProjectsComponent } from './src/app/features/projects/projects.component';
import { AboutComponent } from './src/app/features/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: ProjectsComponent },
];
