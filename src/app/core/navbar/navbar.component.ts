import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../services/auth.service';
import {ToastService} from '../toast/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private loginLogoutText: string = 'Login';
  private sub: Subscription;

  constructor(private authservice: AuthService,
              private toastService: ToastService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.authservice.authChanged
      .subscribe((loggedIn: boolean) => {
          this.setLoginLogoutText();
        },
        (err: any) => console.log(err));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loginOrOut() {
    const isAuthenticated = this.authservice.isAuthenticated;
    if (isAuthenticated) {
      this.authservice.logout()
        .subscribe((status: boolean) => {
            this.setLoginLogoutText();
            this.toastService.activate('Logged Out');
            // this.router.navigate(['/home']);
            return;
          },
          (err: any) => console.log(err));
    }
    this.redirectToLogin();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  setLoginLogoutText() {
    this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
  }

}
