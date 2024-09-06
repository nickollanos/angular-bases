import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>counter {{ counter }}</p>

  <button
  (click)="increaseBy(1)"
  >+1</button>
  <button
  (click)="resetBy()"
  >reset</button>
  <button
  (click)="increaseBy(-1)"
  >-1</button>`
})

export class counterComponent  {
  constructor() {

  }


  public title: string = 'Mi primera App';
  public counter:number = 10;

  increaseBy(value: number): void {
      this.counter += value;
  }

  resetBy(): void {
    this.counter = 10;
}
}
