import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { getAuth, signOut} from "firebase/auth"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: ActivatedRoute) {
  }

  logOut() {
    const auth = getAuth()
    signOut(auth).then(() => console.log("Выход из профиля"))
  }
}
