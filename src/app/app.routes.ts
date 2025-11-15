import { Routes } from '@angular/router';
import { HomeComponent } from './src/app/features/home/home.component';
import { ProjectsComponent } from './src/app/features/projects/projects.component';
import { AboutComponent } from './src/app/features/about/about.component';
import { authGuard } from './src/app/guards/auth.guard';
import { LoginComponent } from './src/app/features/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },

  //protected route
  {
    path: 'portfolio/:project',
    component: ProjectsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'portfolio',
    component: ProjectsComponent,
    canActivate: [authGuard],
  },
  // children : [
  //   { path: '', component: ProjectListComponent },              // /projects
  //   { path: ':id', component: ProjectDetailComponent }          // /projects/1 },
];
