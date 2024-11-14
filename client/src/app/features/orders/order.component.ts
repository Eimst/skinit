import {Component, inject, OnInit} from '@angular/core';
import {OrderService} from '../../core/services/order.service';
import {Order} from '../../shared/models/order';
import {RouterLink} from '@angular/router';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  private orderService = inject(OrderService)
  orders: Order[] = []

  ngOnInit(): void {
    this.orderService.getOrdersForUser().subscribe({
      next: items => {this.orders = items;},
    })
  }
}
