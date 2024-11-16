import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AccountService} from '../services/account.service';
import {SnackbarService} from '../services/snackbar.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService)
  const router = inject(Router)
  const snackbarService = inject(SnackbarService)

  if (accountService.isAdmin())
    return true;
  else {
    snackbarService.error("Unauthorized")
    router.navigateByUrl('/shop')
    return false;
  }
};
