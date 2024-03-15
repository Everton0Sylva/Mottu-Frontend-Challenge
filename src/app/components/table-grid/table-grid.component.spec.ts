import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridComponent } from './table-grid.component';
import { TableGridModule } from './table-grid.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('TableGridComponent', () => {
  let component: TableGridComponent;
  let fixture: ComponentFixture<TableGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGridComponent],  
      imports: [
        TableGridModule,
        RouterTestingModule,
        TranslateModule.forRoot(),]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
