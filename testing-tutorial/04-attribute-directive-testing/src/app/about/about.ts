import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from '../directives/highlight';

@Component({
  selector: 'app-about',
  imports: [HighlightDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  color: string = 'skyblue';
}
