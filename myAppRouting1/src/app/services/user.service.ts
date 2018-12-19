import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios: User[] = [
    new User(1, 'pepe', 'p@p.es', 45),
    new User(2, 'juana', 'j@p.es', 35),
    new User(3, 'paca', 'p@p.es', 25),
    new User(4, 'jota', 'j@p.es', 15),
    new User(5, 'cristi', 'c@p.es', 5),
    new User(6, 'pilingui', 'p@p.es', 85),
  ];

  constructor() { }

  getUsuarios(): User[] {
    return this._usuarios;
  }
  addUser(nuevoU: User): boolean {
    nuevoU.uid = (new Date()).getTime();
    this._usuarios.push(nuevoU)
    return true;
  }


}
