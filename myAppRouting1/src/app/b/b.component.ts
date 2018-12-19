import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  pedidos: Pedidos[] = null;
  valor: string = '';

  constructor(private _pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidos = this._pedidoService.getPedidos();
  
  }

}
