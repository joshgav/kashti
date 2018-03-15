import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BuildComponent } from './build/build.component';
import { ProjectService } from './project.service';
import { BuildService } from './build.service';
import { ProjectComponent } from './project/project.component';
import { BuildStatusBadgeComponent } from './build-status-badge/build-status-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyleGuideComponent,
    SidebarComponent,
    FooterComponent,
    ProjectComponent,
    BuildComponent,
    BuildStatusBadgeComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100})
  ],
  providers: [ProjectService, BuildService],
  bootstrap: [AppComponent]
})
export class AppModule {}
