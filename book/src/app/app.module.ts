import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {BookModuleModule} from "../book-module/book-module.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BookModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
