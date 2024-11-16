import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {ShopComponent} from './features/shop/shop.component';
import {ProductDetailsComponent} from './features/shop/product-details/product-details.component';
import {TestErrorComponent} from './features/test-error/test-error.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ServerErrorComponent} from './shared/components/server-error/server-error.component';
import {CartComponent} from './features/cart/cart.component';
import {CheckoutComponent} from './features/checkout/checkout.component';
import {LoginComponent} from './features/account/login/login.component';
import {RegisterComponent} from './features/account/register/register.component';
import {authGuard} from './core/guards/auth.guard';
import {emptyCartAuthGuard} from './core/guards/empty-cart-auth.guard';
import {CheckoutSuccessComponent} from './features/checkout/checkout-success/checkout-success.component';
import {OrderComponent} from './features/orders/order.component';
import {OrderDetailedComponent} from './features/orders/order-detailed/order-detailed.component';
import {orderCompleteGuard} from './core/guards/order-complete.guard';
import {AdminComponent} from './features/admin/admin.component';
import {adminGuard} from './core/guards/admin.guard';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [authGuard, emptyCartAuthGuard]},
  {path: 'checkout/success', component: CheckoutSuccessComponent, canActivate: [authGuard, orderCompleteGuard]},
  {path: 'orders', component: OrderComponent, canActivate: [authGuard]},
  {path: 'orders/:id', component: OrderDetailedComponent, canActivate: [authGuard]},
  {path: 'account/login', component: LoginComponent},
  {path: 'account/register', component: RegisterComponent},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard, adminGuard]},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];
