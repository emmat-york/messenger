import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: 'contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @Input() contact!: any;
}
