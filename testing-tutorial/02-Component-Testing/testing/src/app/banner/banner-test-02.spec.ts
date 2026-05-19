import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Banner } from './banner';

describe('banner (with beforeEach)', () => {
  let component: Banner;
  let fixture: ComponentFixture<Banner>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Banner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  it('should create before each', () => {
    expect(component).toBeDefined();
  });

  it('should contain "banner works!"', () => {
    const bannerEle: HTMLElement = fixture.nativeElement;
    expect(bannerEle.textContent).toContain('banner works!');
  });
});
