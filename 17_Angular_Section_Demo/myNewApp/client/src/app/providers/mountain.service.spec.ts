import { TestBed, inject } from '@angular/core/testing';

import { MountainService } from './mountain.service';

describe('MountainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MountainService]
    });
  });

  it('should be created', inject([MountainService], (service: MountainService) => {
    expect(service).toBeTruthy();
  }));
});
