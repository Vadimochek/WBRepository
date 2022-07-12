import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  name = ''
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  changeForm(url: string): boolean {
    return this.route.snapshot.url.toString() === url
  }

}
