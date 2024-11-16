import {Routes} from '@angular/router';
import {CheckoutComponent} from './checkout.component';
import {authGuard} from '../../core/guards/auth.guard';
import {emptyCartAuthGuard} from '../../core/guards/empty-cart-auth.guard';
import {CheckoutSuccessComponent} from './checkout-success/checkout-success.component';
import {orderCompleteGuard} from '../../core/guards/order-complete.guard';

export const checkoutRoutes: Routes = [
  {path: '', component: CheckoutComponent, canActivate: [authGuard, emptyCartAuthGuard]},
  {path: 'success', component: CheckoutSuccessComponent, canActivate: [authGuard, orderCompleteGuard]},
]
