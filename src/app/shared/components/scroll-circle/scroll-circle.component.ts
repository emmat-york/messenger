import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollType } from './interfaces/scroll-circle.interface';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../pipes/icon/icon.pipe';

@Component({
  selector: 'app-scroll-circle',
  standalone: true,
  templateUrl: './scroll-circle.component.html',
  styleUrl: './scroll-circle.component.scss',
  imports: [NgClass, NgOptimizedImage, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollCircleComponent {
  @Input() type: ScrollType = 'down';
}
