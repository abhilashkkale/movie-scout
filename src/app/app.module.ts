import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutingModule } from "src/app/app.routing.module";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { AppConstants } from "src/app/app.constants";
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule, RoutingModule, FormsModule, NgxPaginationModule, HttpClientModule
  ],
  providers: [AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
