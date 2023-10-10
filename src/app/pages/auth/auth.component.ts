import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthFacade } from "../../shared/services/facades/auth.facade";

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.scss'],
    providers: [AuthFacade],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
    isAuth$ = this.authFacade.isAuth$;

    constructor(private authFacade: AuthFacade) {}
}
