import { TestBed } from '@angular/core/testing';

import { RepositorioAvisosService } from './repositorio-avisos.service';

describe('ContactoRepositorioService', () => {
  let service: RepositorioAvisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorioAvisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
