import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks/tasks.service';
//! Importamos el service
import {HttpClientModule} from '@angular/common/http';
//! Importamos el httpModule


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TasksService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
