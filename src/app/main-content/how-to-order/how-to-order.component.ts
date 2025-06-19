import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [],
  template: `<section class="how-to-order">
    <h2>How to order</h2>
    <div class="order-steps">
      <div class="step">
        <img src="assets/img/noodle.png" alt="noodle" />
        <p>Pick your noodle</p>
      </div>
      <div class="step">
        <img src="assets/img/broth.png" alt="broth" />
        <p>Pick your broth</p>
      </div>
      <div class="step">
        <img src="assets/img/egg.png" alt="eggs" />
        <p>Add your toppings</p>
      </div>
    </div>
  </section> `,
  styleUrl: './how-to-order.component.scss',
})
export class HowToOrderComponent {}
