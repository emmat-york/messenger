import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerComponent } from './pages/messanger/messenger.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/messanger/components/main/main.component';
import { PersonalInfoComponent } from './pages/messanger/components/personal-info/personal-info.component';
import { SettingsComponent } from './pages/messanger/components/settings/settings.component';
import { AuthGuardFn } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messenger',
  },
  {
    path: 'messenger',
    component: MessengerComponent,
    canActivate: [AuthGuardFn],
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
