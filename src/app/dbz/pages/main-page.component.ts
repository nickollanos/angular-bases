import { Component } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";
import { DbzService } from "../services/dbz.service";


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

    get personajes() : Personaje[] {
      return [...this.dbzService.personajes];
    }

    onDeletePersonje( id: string ) : void{
      this.dbzService.deletePersonajeById(id);
    }

    onNewPersonaje( personaje: Personaje): void {
      this.dbzService.addPersonaje( personaje );
    }

}
