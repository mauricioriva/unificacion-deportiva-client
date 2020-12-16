import { TestBed } from '@angular/core/testing';

import { RestringirAccesoService } from './restringir-acceso.service';

describe('RestringirAccesoService', () => {
  let service: RestringirAccesoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestringirAccesoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
