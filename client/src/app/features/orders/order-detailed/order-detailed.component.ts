import {Component, inject, OnInit} from '@angular/core';
import {OrderService} from '../../../core/services/order.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Order} from '../../../shared/models/order';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {AddressPipe} from '../../../shared/pipes/address.pipe';
import {PaymentPipe} from '../../../shared/pipes/payment.pipe';

@Component({
  selector: 'app-order-detailed',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    DatePipe,
    CurrencyPipe,
    RouterLink,
    AddressPipe,
    PaymentPipe
  ],
  templateUrl: './order-detailed.component.html',
  styleUrl: './order-detailed.component.css'
})
export class OrderDetailedComponent implements OnInit {
  private orderService = inject(OrderService);
  private activatedRoute = inject(ActivatedRoute);
  order?: Order;

  ngOnInit(): void {
    this.loadOrder()
  }

  loadOrder() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;

    this.orderService.getOrderDetailed(+id).subscribe({
      next: product => this.order = product
    })
  }
}
