import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiHeaderComponent } from './mi-header/mi-header.component';
import { MiFooterComponent } from './mi-footer/mi-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MiHeaderComponent,
    MiFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
