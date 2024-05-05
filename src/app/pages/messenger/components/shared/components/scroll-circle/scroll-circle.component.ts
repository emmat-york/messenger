import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollType } from './interfaces/scroll-circle.interface';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';

@Component({
  selector: 'app-scroll-circle',
  standalone: true,
  templateUrl: './scroll-circle.component.html',
  styleUrl: './scroll-circle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgOptimizedImage, IconPipe],
})
export class ScrollCircleComponent {
  @Input() type: ScrollType = 'down';
}
