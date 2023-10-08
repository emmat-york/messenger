import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title$ = of('The app');
}
