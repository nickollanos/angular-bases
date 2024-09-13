import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

    @Output()
    public onNewPersonaje : EventEmitter<Personaje> = new EventEmitter();

    public personaje: Personaje = { 
      nombre: '',
      poder: 0
    };

    emitPersonaje(): void{
      console.log(this.personaje)
      if ( this.personaje.nombre.length === 0 ) return;
      this.onNewPersonaje.emit(this.personaje);


      this.personaje = { nombre : '', poder : 0};
    }
}
