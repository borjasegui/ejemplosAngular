import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  usuarios: User[] = null;

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.usuarios=this._userService.getUsuarios();
  }

}
