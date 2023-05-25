import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesPageComponent } from './promises-page.component';

describe('PromisesPageComponent', () => {
  let component: PromisesPageComponent;
  let fixture: ComponentFixture<PromisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
