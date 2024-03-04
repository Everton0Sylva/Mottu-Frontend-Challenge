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
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BookmarksComponent } from './bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    BookmarksComponent
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
    NgScrollbarModule,
    NgbPaginationModule
  ],
  providers:[
    TableGridService,
  ]
})
export class ViewsModule { }
