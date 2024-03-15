import { TestBed } from '@angular/core/testing';

import { ApiRequestService } from './api-request.service';

describe('ApiRequestService', () => {
  let service: ApiRequestService;

  beforeEach(() => {
    service = new ApiRequestService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
