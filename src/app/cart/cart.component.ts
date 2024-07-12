import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Study } from '../studies/Study';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  requestedStudies$: Observable<Study[]>;

  constructor(private cart: CartService) {
    this.requestedStudies$ = cart.requestedStudies.asObservable();
  }

}
