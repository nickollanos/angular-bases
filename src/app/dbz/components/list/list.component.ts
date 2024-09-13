import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent {

  @Input()
  public personajeList: Personaje[] = [{
    id: '',
    nombre: 'trunks',
    poder: 2000
  }];

  @Output()
  public onDelete = new EventEmitter<string>();

  onDeletePersonaje(id?: string):void {
    //TODO: Emitir el ID personaje

  if(!id) return;
  
    this.onDelete.emit(id);
  }

}
