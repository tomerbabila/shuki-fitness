import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services';
import { UserStore } from '@store/user/user.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public userStore: UserStore,
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
  }

  goTo(path: '' | 'login' | 'register') {
    this.router.navigate([`/${path}`]);
  }
}
