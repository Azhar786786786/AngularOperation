import { Component } from '@angular/core';

type Item = { id: number; name: string };

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  items: Item[] = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ];
  shuffle() {
    this.items = [...this.items].reverse();
  }
  trackById(_i: number, it: Item) { return it.id; }

}
