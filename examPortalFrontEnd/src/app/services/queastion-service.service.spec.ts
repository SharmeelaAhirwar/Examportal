import { TestBed } from '@angular/core/testing';

import { QueastionServiceService } from './queastion-service.service';

describe('QueastionServiceService', () => {
  let service: QueastionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueastionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
