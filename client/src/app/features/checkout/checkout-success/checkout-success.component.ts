import {Component, inject, OnDestroy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {SignalrService} from '../../../core/services/signalr.service';
import {CurrencyPipe, DatePipe, NgIf} from '@angular/common';
import {PaymentPipe} from '../../../shared/pipes/payment.pipe';
import {AddressPipe} from '../../../shared/pipes/address.pipe';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {OrderService} from '../../../core/services/order.service';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    NgIf,
    DatePipe,
    PaymentPipe,
    AddressPipe,
    CurrencyPipe,
    MatProgressSpinner
  ],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.css'
})
export class CheckoutSuccessComponent implements OnDestroy{
  private orderService = inject(OrderService)
  signalrService = inject(SignalrService);

  ngOnDestroy(): void {
    this.orderService.orderComplete = false;
    this.signalrService.orderSignal.set(null);
  }
}
