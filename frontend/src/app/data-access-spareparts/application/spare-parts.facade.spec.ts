import { TestBed } from '@angular/core/testing';

import { SparePartsFacade } from './spare-parts.service';

describe('SparePartsService', () => {
  let service: SparePartsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparePartsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
