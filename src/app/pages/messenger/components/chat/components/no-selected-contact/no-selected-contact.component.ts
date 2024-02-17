import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-selected-contact',
  standalone: true,
  template: 'Select a chat to start messaging',
  styleUrl: 'no-selected-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoSelectedContactComponent {}
