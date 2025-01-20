import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EssentialUserData } from '../../../../../../../shared/services/api/chat/chat-service.interface';
import { AvatarComponent } from '../../../../../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  imports: [AvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @Input() contact: EssentialUserData;
}
