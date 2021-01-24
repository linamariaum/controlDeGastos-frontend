import { TestBed } from '@angular/core/testing';

import { PuntoCompraService } from './punto-compra.service';

describe('PuntoCompraService', () => {
  let service: PuntoCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
