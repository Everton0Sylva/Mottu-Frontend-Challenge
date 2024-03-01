import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { HeaderModule } from '../components/header/header.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TableGridModule } from '../components/table-grid/table-grid.module';


@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsRoutingModule,
    HeaderModule,
    TableGridModule,
    TranslateModule
  ]
})
export class ViewsModule { }
