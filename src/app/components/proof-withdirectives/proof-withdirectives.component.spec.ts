import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofWithdirectivesComponent } from './proof-withdirectives.component';

describe('ProofWithdirectivesComponent', () => {
  let component: ProofWithdirectivesComponent;
  let fixture: ComponentFixture<ProofWithdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofWithdirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofWithdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
