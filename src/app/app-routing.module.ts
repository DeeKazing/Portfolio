import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CVComponent } from './cv/cv.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'cv', component: CVComponent },
  // { path: 'about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
