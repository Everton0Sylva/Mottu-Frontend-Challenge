import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { HeaderModule } from '../components/header/header.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TableGridModule } from '../components/table-grid/table-grid.module';
import { TableGridService } from '../services/table-grid.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


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
    TranslateModule,
    NgxUiLoaderModule,
  ],
  providers:[
    TableGridService,
  ]
})
export class ViewsModule { }
