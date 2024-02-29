import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { HeaderModule } from '../components/header/header.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HeaderModule
  ]
})
export class ViewsModule { }
