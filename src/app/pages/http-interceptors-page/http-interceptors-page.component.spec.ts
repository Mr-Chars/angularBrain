import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterceptorsPageComponent } from './http-interceptors-page.component';

describe('HttpInterceptorsPageComponent', () => {
  let component: HttpInterceptorsPageComponent;
  let fixture: ComponentFixture<HttpInterceptorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpInterceptorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpInterceptorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
