import { TestBed } from '@angular/core/testing';

import { FirstAppService } from './first-app.service';

describe('FirstAppService', () => {
  let service: FirstAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
