import { Directive, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'bgColor() || defaultColor',
  },
})
export class HighlightDirective {
  readonly defaultColor = 'rgb(251, 29, 29)'; //light gray
  readonly bgColor = input('', { alias: 'appHighlight' });
}
