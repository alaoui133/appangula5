import { TestBed } from '@angular/core/testing';

import { GithubFolowersService } from './github-folowers.service';

describe('GithubFolowersService', () => {
  let service: GithubFolowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFolowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
