import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['../first-page/first-page.component.css', './second-page.component.css',
    ]
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
