import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedido';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  pedidos: Pedidos[] = null;

  constructor() { }

  ngOnInit() {
    this.pedidos=[
      new Pedidos(1,'carcasa',345),
      new Pedidos(2,'dildo',135),
      new Pedidos(3,'compresa',34556),
      new Pedidos(4,'anillo',32423),
      new Pedidos(5,'guantes',6356),
      new Pedidos(6,'polvoron',45636),
    ];
  }

}
