import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { About } from '../about/about';

describe('Highlight', () => {
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [About],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(About);
    await fixture.whenStable();
  });
  it('should have skyblue <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});
