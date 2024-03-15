import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsComponent } from './views.component';
import { ViewsModule } from './views.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('ViewsComponent', () => {
  let component: ViewsComponent;
  let fixture: ComponentFixture<ViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsComponent],
      imports: [ViewsModule,RouterTestingModule,
        TranslateModule.forRoot(),]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
