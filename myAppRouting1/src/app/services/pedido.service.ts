import { Injectable } from '@angular/core';
import { Pedidos } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private _pedidos: Pedidos[] = [
    new Pedidos(1, 'carcasa', 345),
    new Pedidos(2, 'dildo', 135),
    new Pedidos(3, 'compresa', 34556),
    new Pedidos(4, 'anillo', 32423),
    new Pedidos(5, 'guantes', 6356),
    new Pedidos(6, 'polvoron', 45636),
  ];

  constructor() { }
  
  getPedidos(): Pedidos[] {
    return this._pedidos;
  }
  addPedido(nuevoP: Pedidos): boolean {
    nuevoP.pid = (new Date()).getTime();
    this._pedidos.push(nuevoP)
    return true;
  }
}
