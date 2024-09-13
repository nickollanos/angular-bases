import { Injectable } from '@angular/core';

import { v4 as uuid  } from 'uuid';

import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public personajes: Personaje[] = [{
    id: uuid(),
    nombre: 'Krilin',
    poder: 1000
   },{
    id: uuid(),
    nombre: 'Goku',
    poder: 9500
   },{
    id: uuid(),
    nombre: 'Vegueta',
    poder: 8500
   }
  ];

  addPersonaje( personaje: Personaje ): void {

    const newPersonaje: Personaje = { id: uuid(), ...personaje };

    this.personajes.unshift(newPersonaje);
  }

  // onDeletePersonaje (index: number) {
  //   this.personajes.splice(index, 1);
  // }

  deletePersonajeById ( id: string ) {
    this.personajes = this.personajes.filter( personaje => personaje.id !== id );
  }

  constructor() { }

}
