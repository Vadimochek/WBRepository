import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {BookModuleModule} from "../book-module/book-module.module";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path: 'book', loadChildren: () => import('../book-module/book-module.module').then(m => m.BookModuleModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BookModuleModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
