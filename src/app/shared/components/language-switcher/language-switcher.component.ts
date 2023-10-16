import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Inject,
  OnInit,
} from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Languages } from '../../enums/languages.enum';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Option } from '../dropdown/interfaces/dropdown.interfaces';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  template: '<app-dropdown [options]="options" [formControl]="control"></app-dropdown>',
  imports: [DropdownComponent, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  control = new FormControl(this.translate.currentLang);
  options: Option[] = [
    {
      title: 'English',
      value: Languages.En,
    },
    {
      title: 'Russian',
      value: Languages.Ru,
    },
  ];

  constructor(
    @Inject(DestroyRef) private destroyRef: DestroyRef,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.subscribeToLanguageChanges();
  }

  private subscribeToLanguageChanges(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(language => {
        this.translate.use(language || Languages.En);
      });
  }
}
