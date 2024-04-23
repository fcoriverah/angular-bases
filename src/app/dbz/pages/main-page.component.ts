import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
      name: 'Goku',
      power: 10000
    },{
      name: 'Vegeta',
      power: 9000
    },{
      name: 'Trunks',
      power: 8000
    },{
      name: 'Piccolo',
      power: 7000
    },{
      name: 'Gohan',
      power: 6000
    }
  ];

  onNewCharacter( character: Character ): void {
    console.log('MainPage', this.characters);
    this.characters.push(character);
  };
}