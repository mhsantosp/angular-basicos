import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  // propiedades
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  // get & set
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  // constructor
  constructor() { }

  // metodos
  addPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}