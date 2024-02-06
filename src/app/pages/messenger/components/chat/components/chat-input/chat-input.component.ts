import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output
} from "@angular/core";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {distinctUntilChanged, map} from "rxjs";
import {getTrimmedString} from "../../../../../../shared/helpers/input.helper";

@Component({
  selector: 'chat-input',
  standalone: true,
  templateUrl: 'chat-input.component.html',
  styleUrl: 'chat-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class ChatInputComponent implements OnInit {
  @Input() set input(input: string) {
    this.control.patchValue(input, { emitEvent: false });
  };

  @Output() setInput = new EventEmitter<string>();
  @Output() sendMessage = new EventEmitter<void>();

  control = new FormControl('');

  constructor(@Inject(DestroyRef) private readonly destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.subscribeToInput();
  }

  onSendMessage(): void {
    if (!this.control.getRawValue()) {
      return;
    }

    this.sendMessage.emit();
  }

  private subscribeToInput(): void {
    this.control.valueChanges.pipe(map((input) => getTrimmedString(input)), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((input) => {
      this.setInput.emit(input);
    });
  }
}
