import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-message-skeleton',
  standalone: true,
  template: `@for (_ of array(20); track _) {
    <div class="outer-card">
      <div class="inner-card"></div>
    </div>
    } `,
  styles: `:host {
      display: block;
      padding: 8px 16px;
    }

    .outer-card {
      margin-bottom: 10px;
      border-radius: 12px;
      box-shadow: 2px -2px 12px rgb(202, 202, 202);

      &:nth-child(1n) {
        width: 50%;
        height: 70px;
      }

      &:nth-child(2n) {
        height: 50px;
        width: 38%;
      }

      &:nth-child(3n) {
        height: 76px;
        width: 26%;
      }

      &:nth-child(4n) {
        height: 88px;
        width: 42%;
      }
    }

    .inner-card {
      height: inherit;
      border-radius: 12px 12px 12px 0;
      background: linear-gradient(100deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      background-size: 200% 100%;
      animation: 1s shine linear infinite;
    }

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSkeletonComponent {
  readonly array = Array;
}
