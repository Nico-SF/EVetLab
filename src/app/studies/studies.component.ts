import { Component } from '@angular/core';
import { Study } from './Study';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {

  constructor(private cartService: CartService) { }

  studies: Study[] = this.cartService.getStudies();

  addToCart(study: Study): void {
    this.cartService.addToRequestedStudies(study);
  }

  onRequestedChange(study: Study): void {
    study.requested = !study.requested;
    if (study.requested) {
      this.cartService.addToRequestedStudies(study);
    } else {
      this.cartService.removeFromRequestedStudies(study);
    }
  }

  checkStudy(study: Study): boolean {
    study.requested = this.cartService.checkStudy(study);
    return study.requested;
  }
}
