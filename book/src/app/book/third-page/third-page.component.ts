import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: [ '../first-page/first-page.component.css', './third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
