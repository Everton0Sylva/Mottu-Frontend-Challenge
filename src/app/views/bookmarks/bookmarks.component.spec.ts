import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksComponent } from './bookmarks.component';
import { ViewsModule } from '../views.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarksComponent],  
      imports: [
        ViewsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
