import { TestBed } from '@angular/core/testing';

import { LibrosServiceService } from './libros-service.service';

describe('LibrosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosServiceService = TestBed.get(LibrosServiceService);
    expect(service).toBeTruthy();
  });
});
