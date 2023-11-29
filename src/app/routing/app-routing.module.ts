import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerComponent } from '../pages/messanger/messenger.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ChatComponent } from '../pages/messanger/components/main/main.component';
import { PersonalInfoComponent } from '../pages/messanger/components/personal-info/personal-info.component';
import { SettingsComponent } from '../pages/messanger/components/settings/settings.component';
import { AuthGuardFn } from './guards/auth.guard';
import { AppRoutes } from './enums/routing.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.messenger,
  },
  {
    path: AppRoutes.messenger,
    component: MessengerComponent,
    // canActivate: [AuthGuardFn],
    children: [
      {
        path: '',
        component: ChatComponent,
      },
      {
        path: AppRoutes.personalInfo,
        component: PersonalInfoComponent,
      },
      {
        path: AppRoutes.settings,
        component: SettingsComponent,
      },
    ],
  },
  {
    path: AppRoutes.signUp,
    component: SignUpComponent,
  },
  {
    path: AppRoutes.signIn,
    component: SignInComponent,
  },
  {
    path: AppRoutes.notFound,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
