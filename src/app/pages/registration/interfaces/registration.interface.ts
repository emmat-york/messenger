import { FormControl } from '@angular/forms';
import { RegistrationFormKey } from '../enums/registration.enum';

export interface RegistrationFormGroup {
  [RegistrationFormKey.Email]: FormControl<string>;
  [RegistrationFormKey.Password]: FormControl<string>;
  [RegistrationFormKey.UserName]: FormControl<string>;
}
