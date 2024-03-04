import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGridComponent } from './table-grid.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TableGridComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TableGridComponent],
})
export class TableGridModule { }
