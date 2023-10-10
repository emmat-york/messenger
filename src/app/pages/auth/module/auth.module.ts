import { NgModule } from '@angular/core';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { AuthComponent } from '../auth.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AuthComponent, SignUpComponent, SignInComponent],
  imports: [RouterOutlet],
})
export class AuthModule {}
