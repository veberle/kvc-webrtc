import { TestBed, inject } from '@angular/core/testing';

import { FullvideoService } from './fullvideo.service';

describe('FullvideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullvideoService]
    });
  });

  it('should be created', inject([FullvideoService], (service: FullvideoService) => {
    expect(service).toBeTruthy();
  }));
});
