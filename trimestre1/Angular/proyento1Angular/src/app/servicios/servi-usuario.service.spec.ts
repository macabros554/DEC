import { TestBed } from '@angular/core/testing';

import { ServiUsuarioService } from './servi-usuario.service';

describe('ServiUsuarioService', () => {
  let service: ServiUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
