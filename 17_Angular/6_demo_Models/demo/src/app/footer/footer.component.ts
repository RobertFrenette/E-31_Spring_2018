import { Component } from '@angular/core';

// @Component Decorator
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = 2018;

  getCurrentYear(): number {
    return this.currentYear;
  }
}
