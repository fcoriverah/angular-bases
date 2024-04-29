import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
      id: uuid(),
      name: 'Goku',
      power: 10000
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },{
      id: uuid(),
      name: 'Trunks',
      power: 8000
    },{
      id: uuid(),
      name: 'Piccolo',
      power: 7000
    },{
      id: uuid(),
      name: 'Gohan',
      power: 6000
    }
  ];

  addCharacter( character: Character ): void {
    const newCharacter = { id: uuid(), ...character };
    this.characters.push( newCharacter );
    console.log('MainPage', this.characters);
  };

  // onDeleteCharacter( index: number ): void {
  //   this.characters.splice( index, 1 );
  // };

  deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
