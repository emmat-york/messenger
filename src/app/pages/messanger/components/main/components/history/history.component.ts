import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Message } from '../contacts/components/interfaces/contact.interfaces';
import { MessageComponent } from './components/message/message.component';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
  imports: [NgIf, NgForOf, MessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  @Input() messages!: Message[];
  @Input() avatar!: string;
}
