import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from "./book/book.component";
import {HeaderComponent} from "./book/header/header.component";
import {PaginationComponent} from "./book/pagination/pagination.component";
import {FirstPageComponent} from "./book/first-page/first-page.component";
import {SecondPageComponent} from "./book/second-page/second-page.component";
import {ThirdPageComponent} from "./book/third-page/third-page.component";
import {FourthPageComponent} from "./book/fourth-page/fourth-page.component";
import {FifthPageComponent} from "./book/fifth-page/fifth-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {pageRoutes} from './routes'
import {AuthGuard} from "../app/guards/auth.guard";

const routes: Routes = [
  {path: 'book', component: BookComponent, canActivate: [AuthGuard], children: [
      {path: 'pages', children:
          [...pageRoutes,
            {path: '', redirectTo: "1", pathMatch: "full"}]
      },
      {path: '', redirectTo: "pages", pathMatch: "full"},
    ]},
  // {path: '', redirectTo: 'book', pathMatch: "full"},
  // {path: '**', component: NotFoundComponent}
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
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
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
    RouterModule,
  ],
  bootstrap: [BookComponent]

})


export class BookModuleModule {
}
