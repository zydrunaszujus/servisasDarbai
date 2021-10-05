import { TestBed } from '@angular/core/testing';

import { KiausiniaiService } from './kiausiniai.service';

describe('KiausiniaiService', () => {
  let service: KiausiniaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiausiniaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
