import { TestBed } from '@angular/core/testing';

import { PhotoGeneratorService } from './photo-generator.service';

describe('PhotoGeneratorService', () => {
  let service: PhotoGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
