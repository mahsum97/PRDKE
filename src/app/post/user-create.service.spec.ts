import { TestBed } from '@angular/core/testing';

import { PostCreateService } from './post-create.service';

describe('UserCreateService', () => {
  let service: PostCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
