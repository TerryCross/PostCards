import { TestBed } from '@angular/core/testing';

import { PostfetchService } from './postfetch.service';

describe('PostfetchService', () => {
  let service: PostfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
