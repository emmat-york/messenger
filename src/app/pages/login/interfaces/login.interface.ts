import { LoginFormKey } from '../enums/login.enum';
import { FormControl } from '@angular/forms';

export interface LoginFormGroup {
  [LoginFormKey.Email]: FormControl<string>;
  [LoginFormKey.Password]: FormControl<string>;
}
