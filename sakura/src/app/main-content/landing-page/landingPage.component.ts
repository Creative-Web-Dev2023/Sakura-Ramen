import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `<section>
    <app-navbar></app-navbar>
    <h1 class="fontRaleway">Sakura Ramen</h1>
    <h2>Best Ramen in Town</h2>
  </section>`,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
