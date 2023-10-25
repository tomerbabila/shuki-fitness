import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services';
import { UserStore } from '@store/user';
import { take, map, tap } from 'rxjs/operators';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const userStore: UserStore = inject(UserStore);

  return userStore.state$.pipe(
    take(1),
    map(user => {
      return authService.canEditAndWrite(user);
    }),
    tap(isAdmin => {
      if (!isAdmin) {
        console.warn('Access denied - Admins only');
      }
    })
  );
};
