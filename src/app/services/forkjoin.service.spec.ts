import { TestBed } from '@angular/core/testing';

import { ForkjoinService } from './forkjoin.service';

describe('ForkjoinService', () => {
  let service: ForkjoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkjoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
