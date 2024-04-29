import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
  }];

  // onDeleteID = Index value: number;
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( index?: string ): void {
    // TODO: Emitir el ID del personaje
    // console.log('index: ', index);

    if ( !index ) {
      return;
    }
    this.onDelete.emit( index );
  }
}
