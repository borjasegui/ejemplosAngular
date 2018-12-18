import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string= 'myApp';
  nombre:string= 'zorrona';
  edad:number =57;

  getName(): string{
    return this.nombre+" "+this.title+" "+this.edad;
  }
}
