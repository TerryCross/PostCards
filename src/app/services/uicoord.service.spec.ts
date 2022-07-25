import { TestBed } from '@angular/core/testing';

import { UicoordService } from './uicoord.service';

describe('UicoordService', () => {
  let service: UicoordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UicoordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
