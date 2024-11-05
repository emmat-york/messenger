import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ArrayFilterPipe } from '../../../../../shared/pipes/array-filter.pipe';
import { DialogComponent } from '../../dialogs/dialog/dialog.component';
import { Dialog } from '../../../../../shared/services/api/chat/chat-service.interface';

@Component({
  selector: 'app-chats-search-bar',
  standalone: true,
  templateUrl: 'chats-search-bar.component.html',
  styleUrl: 'chats-search-bar.component.scss',
  imports: [NgForOf, NgIf, ArrayFilterPipe, DialogComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsSearchBarComponent {
  @Input() dialogs: Dialog[] = [];
  @Input() searchRequest = '';
}
