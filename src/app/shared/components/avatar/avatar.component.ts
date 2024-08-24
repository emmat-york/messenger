import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';

type AvatarVariant = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: 'avatar.component.html',
  styleUrl: 'avatar.component.scss',
  imports: [NgOptimizedImage, TitleCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() set variant(variant: AvatarVariant) {
    if (variant === 'small') {
      this.size = 32;
    } else if (variant === 'medium') {
      this.size = 40;
    } else {
      this.size = 42;
    }
  }

  size: 32 | 40 | 42 = 40;

  @Input() src: string | null = null;
  @Input() safeName = '';
}
