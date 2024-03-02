import { TestBed } from '@angular/core/testing';

import { TableGridService } from './table-grid.service';

describe('TableGridService', () => {
  let service: TableGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
