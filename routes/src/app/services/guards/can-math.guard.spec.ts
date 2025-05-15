import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { canMathGuard } from './can-math.guard';

describe('canMathGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canMathGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
