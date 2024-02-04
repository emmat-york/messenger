import {AuthService} from "../../api/auth/auth.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private readonly authService: AuthService) {}
}
