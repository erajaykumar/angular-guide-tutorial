import { TestBed } from '@angular/core/testing';

import { OrderTotal } from './order-total';
import { Mocked } from 'vitest';
import { TaxCalculator } from './tax-calculator';

//Vitest's `Mocked` utility type ensures the stub is type-safe,
// while `vi.fn()` creates a mock function for each method...
const taxCalculatorStub: Mocked<TaxCalculator> = {
  calculate: vi.fn(),
};

describe('OrderTotal', () => {
  let service: OrderTotal;

  beforeEach(() => {
    // `mockReturnValue` sets a controlled return value for the stub
    taxCalculatorStub.calculate.mockReturnValue(5);

    TestBed.configureTestingModule({
      // The `provieder` array accepts a provider object where `provide`
      // specifies the dependency to replace and `useValue` defines the stub
      providers: [{ provide: TaxCalculator, useValue: taxCalculatorStub }],
    });

    service = TestBed.inject(OrderTotal);
  });

  it('add tax to the subtotal', () => {
    expect(service.total(100)).toBe(105);
  });
});
