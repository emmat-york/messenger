import {Routes} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {AppRoutes} from "./shared/enums/routes.enum";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.Chat,
  },
  {
    path: AppRoutes.Chat,
    component: ChatComponent,
  },
  {
    path: AppRoutes.Registration,
    component: RegistrationComponent,
  },
  {
    path: AppRoutes.Login,
    component: LoginComponent,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
];
