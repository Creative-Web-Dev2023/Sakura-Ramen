import { Component } from '@angular/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  template: ` 
    <section class="our-menu-section">
      <h2 >Our menu</h2>
      <div id="ourmenu"></div>
      <article class="menu-table-img-left">
        <div class="menu-image-wrapper">
          <img src="./../../../assets/img/r1.png" />
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Tonkotsu Ramen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chicken</td>
              <td class="price">11,95€</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td class="price">11,95€</td>
            </tr>
            <tr>
              <td>Shrimps</td>
              <td class="price">11,95€</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="menu-table-img-right" >
        <div class="menu-image-wrapper">
          <img src="./../../../assets/img/r2.png" />
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Spicy Miso Ramen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chicken</td>
              <td class="price">11,95€</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td class="price">11,95€</td>
            </tr>
            <tr>
              <td>Shrimps</td>
              <td class="price">11,95€</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="menu-table-img-left" >
        <div class="menu-image-wrapper">
          <img src="./../../../assets/img/r3.png" />
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Shio Ramen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chicken</td>
              <td class="price">11,95€</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td class="price">11,95€</td>
            </tr>
            <tr>
              <td>Shrimps</td>
              <td class="price">11,95€</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>`,
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
