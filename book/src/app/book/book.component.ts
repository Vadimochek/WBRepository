import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {PaginationComponent} from "./pagination/pagination.component";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  pageNumber: number = 1

  constructor() {
  }

  ngOnInit(): void {

  }

  getPage(page: number) {
    this.pageNumber = page
  }

}
