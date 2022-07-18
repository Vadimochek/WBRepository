import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {BookModuleModule} from "../book-module/book-module.module";
import {RouterModule, Routes} from "@angular/router";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from "../table/table.module";
import {AuthComponent} from './auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { GraphicsComponent } from './graphics/graphics.component';
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {
    path: 'book', loadChildren: () => import('../book-module/book-module.module').then(m => m.BookModuleModule)
  },
  {
    path: 'table', loadChildren: () => import('../table/table.module').then(m => m.TableModule)
  },
  {path: '', redirectTo: "auth", pathMatch: "full"},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: AuthComponent},
  {path: 'graphics', component: GraphicsComponent, canActivate: [AuthGuard]}

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
    NoopAnimationsModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
