import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Flash'];
  public deleteHero?: string;

  removeLastHeroe(): void {
    this.deleteHero = this.heroNames.pop();

  }


}
