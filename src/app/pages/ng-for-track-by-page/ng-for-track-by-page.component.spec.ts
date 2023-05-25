import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTrackByPageComponent } from './ng-for-track-by-page.component';

describe('NgForTrackByPageComponent', () => {
  let component: NgForTrackByPageComponent;
  let fixture: ComponentFixture<NgForTrackByPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForTrackByPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForTrackByPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
