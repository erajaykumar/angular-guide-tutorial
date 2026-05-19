import { TestBed } from '@angular/core/testing';
import { describe, beforeEach } from 'vitest';

import { Calculator } from './calculator';

describe('Calculator', () => {
  let service: Calculator;

  beforeEach(() => {
    //Injects the Calculator service which is available to Angular
    // because the service uses `providedIn: 'root`
    service = TestBed.inject(Calculator);
  });

  it('add two numbers', () => {
    expect(service.add(1, 2)).toBe(3);
  });

  it('substract two numbers', () => {
    expect(service.subtract(5, 3)).toBe(2);
  });
});
