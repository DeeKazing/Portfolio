import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVComponent } from './cv/cv.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, ProjectsComponent, HomepageComponent, CVComponent],
  imports: [BrowserModule, AppRoutingModule, MatTooltipModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
