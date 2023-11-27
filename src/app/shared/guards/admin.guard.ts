import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services';
import { UserStore } from '@store/user';
import { filter, map, tap } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const userStore: UserStore = inject(UserStore);

  // TODO: Use userStore.isLoggedIn$ to check first if user is logged in
  return userStore.user$.pipe(
    filter(user => !!user.uid),
    map(user => authService.canEditAndWrite()),
    tap(isAdmin => {
      if (!isAdmin) {
        console.warn('Access denied - Admins only');
      }
    })
  );
};
