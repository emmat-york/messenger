import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-message-skeleton',
  standalone: true,
  template: `@for (_ of array(20); track _) {
    <div class="card is-loading">
      <div class="image"></div>
    </div>
    } `,
  styleUrl: 'message-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSkeletonComponent {
  readonly array = Array;
}
