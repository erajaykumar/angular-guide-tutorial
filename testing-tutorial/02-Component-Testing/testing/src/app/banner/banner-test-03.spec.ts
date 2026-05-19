import { DebugElement, StaticProvider } from '@angular/core';
import { TestBed, ComponentFixture, InjectSetupWrapper } from '@angular/core/testing';
import { Banner } from './banner';
import { By } from '@angular/platform-browser';
describe('banner (with setup)', () => {
  let component: Banner;
  let fixture: ComponentFixture<Banner>;

  function setup(providers?: StaticProvider[]): ComponentFixture<Banner> {
    TestBed.configureTestingModule({
      imports: [Banner],
      providers,
    });
    return TestBed.createComponent(Banner);
  }

  it('should contain "banner works! with setup "', () => {
    fixture = setup();
    const bannerEle: HTMLElement = fixture.nativeElement;
    expect(bannerEle.textContent).toContain('banner works!');
  });

  it('should have <p> with "banner works!', () => {
    fixture = setup();
    const bannerEle: HTMLElement = fixture.nativeElement;
    console.log('Banner element\n', bannerEle);
    const p = bannerEle.querySelector('p')!;
    expect(p.textContent).toEqual('banner works!');
  });

  it('should find the <p> with fixture.debugElement.navtiveElement', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEle: HTMLElement = bannerDe.nativeElement;

    const p = bannerEle.querySelector('p')!;
    expect(p.textContent).toEqual('banner works!');
  });
  it('should find the <p>  with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;

    expect(p.textContent).toEqual('banner works!');
  });
});
