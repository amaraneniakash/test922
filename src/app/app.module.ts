import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { GraphNewComponentComponent } from './graph-new-component/graph-new-component.component';
import {HttpModule} from '@angular/http';
import {ChartDataService} from './chart-data.service'

@NgModule({
  declarations: [
    AppComponent,
    GraphNewComponentComponent
  ],
  imports: [
    BrowserModule,HttpModule,ChartsModule
  ],
  providers: [ChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
