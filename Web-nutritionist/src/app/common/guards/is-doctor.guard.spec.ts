import { TestBed } from '@angular/core/testing';

import { IsDoctorGuard } from './is-doctor.guard';

describe('IsDoctorGuard', () => {
  let guard: IsDoctorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsDoctorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
