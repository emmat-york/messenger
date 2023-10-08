import { NgModule } from "@angular/core";
import { SignInComponent } from "../components/sign-in/sign-in.component";
import { SignUpComponent } from "../components/sign-up/sign-up.component";

@NgModule({
    declarations: [SignUpComponent, SignInComponent],
})
export class AuthModule {}
