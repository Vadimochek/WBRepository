import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {BookModuleModule} from "../book-module/book-module.module";
import {RouterModule, Routes} from "@angular/router";
import {TableModule} from "../table/table.module";
import {AuthComponent} from './auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { GraphicsComponent } from './graphics/graphics.component';
import {TokenGuard} from "./guards/token.guard";

import {AuthGuard} from "./guards/auth.guard";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const routes: Routes = [
  {
    path: 'book', loadChildren: () => import('../book-module/book-module.module').then(m => m.BookModuleModule),
  },
  {
    path: 'table', loadChildren: () => import('../table/table.module').then(m => m.TableModule),
    canLoad: [AuthGuard]
  },
  {path: '', redirectTo: "auth", pathMatch: "full"},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: AuthComponent},
  {path: 'charts', component: GraphicsComponent, canActivate: [TokenGuard, AuthGuard], data: ["2720-4044-4713-0021"]}

]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GraphicsComponent,
  ],
  imports: [
    BrowserModule,
    BookModuleModule,
    [RouterModule.forRoot(routes)],
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
