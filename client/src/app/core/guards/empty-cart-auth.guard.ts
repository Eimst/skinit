import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {CartService} from '../services/cart.service';
import {SnackbarService} from '../services/snackbar.service';

export const emptyCartAuthGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);
  const snack = inject(SnackbarService);

  if (!cartService.itemCount() || cartService.cart()?.items.length === 0) {
    router.navigateByUrl('/cart');
    snack.error("Your cart is empty")
    return false
  }
  return true;
};
