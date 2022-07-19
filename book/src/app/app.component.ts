import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: ActivatedRoute) {
  }

  // correctUrl() {
  //   return this.router.snapshot.url.toString() == "auth"
  // }
}
