import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollType } from './interfaces/scroll-circle.interfaces';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-scroll-circle',
  standalone: true,
  templateUrl: 'scroll-circle.component.html',
  styleUrls: ['scroll-circle.component.scss'],
  imports: [IconPipe, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollCircleComponent {
  @Input() type: ScrollType = 'down';
}
