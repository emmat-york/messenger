import { LoginFormKey } from '../enums/login.enum';
import { FormControl } from '@angular/forms';

export interface LoginForm {
  [LoginFormKey.Phone]: FormControl<string>;
}
