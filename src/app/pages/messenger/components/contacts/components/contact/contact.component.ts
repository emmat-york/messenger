import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, NgOptimizedImage],
})
export class ContactComponent {
  @Input() contact!: any;
}
