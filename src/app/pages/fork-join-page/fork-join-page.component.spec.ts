import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinPageComponent } from './fork-join-page.component';

describe('ForkJoinPageComponent', () => {
  let component: ForkJoinPageComponent;
  let fixture: ComponentFixture<ForkJoinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkJoinPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkJoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
