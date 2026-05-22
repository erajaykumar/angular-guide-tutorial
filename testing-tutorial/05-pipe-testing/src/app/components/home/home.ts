import { Component, signal } from '@angular/core';
import { TitleCasePipePipe } from '../../pipes/title-case-pipe-pipe';

@Component({
  selector: 'app-home',
  imports: [TitleCasePipePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = signal('05 pipe testing');
}
