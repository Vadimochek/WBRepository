import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './book/header/header.component';
import { PaginationComponent } from './book/pagination/pagination.component';
import { FirstPageComponent } from './book/first-page/first-page.component';
import { SecondPageComponent } from './book/second-page/second-page.component';
import { ThirdPageComponent } from './book/third-page/third-page.component';
import { FourthPageComponent } from './book/fourth-page/fourth-page.component';
import { FifthPageComponent } from './book/fifth-page/fifth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeaderComponent,
    PaginationComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
