import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {pageRoutes} from "../../routes";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pageArray;
  @Output() getPage = new EventEmitter<number>();
  change(page: number) {
    this.getPage.emit(page)

  }

  constructor() {
    this.pageArray = pageRoutes
  }

  ngOnInit(): void {
  }

}
