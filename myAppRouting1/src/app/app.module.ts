import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { NewPedidoComponent } from './pedido/new-pedido/new-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    MyHeaderComponent,
    NewUserComponent,
    NewPedidoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
