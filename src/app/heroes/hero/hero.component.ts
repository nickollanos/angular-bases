import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:  string = 'Tony Stark';
  public nameHeroe: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHeroe(): void {
    this.name = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'Tony Stark';
    this.age = 45;
  }

}
