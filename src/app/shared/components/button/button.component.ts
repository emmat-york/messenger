import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonVariant =
  | 'regular'
  | 'line'
  | 'commerce'
  | 'publicLink'
  | 'text'
  | 'danger';
export type ButtonType = 'submit' | 'button' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  template: ` <button
    class="button"
    [disabled]="disabled"
    [ngClass]="'variant-' + variant"
    [type]="type"
  >
    <ng-content></ng-content>
  </button>`,
  styles: `:host {
      display: inline-block;
    }

    .button {
      width: inherit;
      font-size: 14px;
      font-weight: var(--font_weight_medium);
      line-height: 16px;
      font-style: normal;
    }

    .variant {
      &-regular {
        padding: var(--spacing_12);
        border-radius: var(--border-radius_4);
        background-color: var(--blue_semi-light9);
        color: var(--white1);

        &:hover:not(&:disabled) {
          opacity: var(--opacity);
        }
      }

      &-text {
        padding: var(--spacing_12);
        border-radius: 4px;
        background-color: transparent;
        color: var(--blue_semi-light9);

        &:hover {
          background-color: var(--steel-gray_bright2);
        }
      }

      &-line {
        padding: var(--spacing_10);
        border-radius: var(--border-radius_7);
        border: 2px solid var(--line-blue);
        text-transform: uppercase;
        background-color: transparent;
        color: var(--line-blue);

        &:hover {
          border-color: var(--line-green);
          color: var(--line-green);
        }
      }

      &-commerce {
        padding: var(--spacing_7);
        border-radius: var(--border-radius_15);
        background-color: var(--green_light2);
        color: var(--green_bright3);

        &:hover:not(&:disabled) {
          opacity: var(--opacity);
        }
      }

      &-publicLink {
        padding: var(--spacing_14);
        border-radius: var(--border-radius_7);
        background-color: var(--mud_white);
        color: var(--black1);

        &:hover:not(&:disabled) {
          opacity: var(--opacity);
        }
      }
      
      &-danger {
        padding: var(--spacing_12);
        border-radius: 4px;
        background-color: transparent;
        color: var(--red3);

        &:hover {
          background-color: var(--red0);
        }
      }
    }
    `,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'regular';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
}
