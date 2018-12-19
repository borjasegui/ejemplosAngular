import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedidos } from 'src/app/models/Pedido';

@Component({
  selector: 'app-new-pedido',
  templateUrl: './new-pedido.component.html',
  styleUrls: ['./new-pedido.component.scss']
})
export class NewPedidoComponent implements OnInit {

  nuevoPedido:Pedidos =new Pedidos(0,'',0);

  constructor(private _pedidoService:PedidoService) { }

  ngOnInit() {
  }
  addPedido(){
    console.log(this.nuevoPedido);
    this._pedidoService.addPedido(this.nuevoPedido);
  }

}
