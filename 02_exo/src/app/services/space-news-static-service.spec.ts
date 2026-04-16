import { TestBed } from '@angular/core/testing';

import { SpaceNewsStaticService } from './space-news-static-service';

describe('SpaceNewsStaticService', () => {
  let service: SpaceNewsStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceNewsStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
