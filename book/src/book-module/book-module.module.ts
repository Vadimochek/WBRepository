import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from "./book/book.component";
import {HeaderComponent} from "./book/header/header.component";
import {PaginationComponent} from "./book/pagination/pagination.component";
import {FirstPageComponent} from "./book/first-page/first-page.component";
import {SecondPageComponent} from "./book/second-page/second-page.component";
import {ThirdPageComponent} from "./book/third-page/third-page.component";
import {FourthPageComponent} from "./book/fourth-page/fourth-page.component";
import {FifthPageComponent} from "./book/fifth-page/fifth-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./book/not-found/not-found.component";


const routes: Routes = [
  { path: 'book',
  children: [
  { path: 'pages', children: [
      { path: '1', component: FirstPageComponent },
      { path: '2', component: SecondPageComponent },
      { path: '3', component: ThirdPageComponent },
      { path: '4', component: FourthPageComponent },
      { path: '5', component: FifthPageComponent }
    ]},
    {path: '**', component: NotFoundComponent}
  ]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    BookComponent,
    HeaderComponent,
    PaginationComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [
    BookComponent,
    HeaderComponent,
    PaginationComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    RouterModule
  ],
  bootstrap: [BookComponent]

})


export class BookModuleModule { }
