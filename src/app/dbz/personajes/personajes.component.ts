import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(public dbzService: DbzService) { }
}
