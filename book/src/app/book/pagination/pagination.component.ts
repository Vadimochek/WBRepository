import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  ListArray: number[] = [1, 2, 3, 4, 5]
  currentPage: number = 1
  @Output() getPage = new EventEmitter<number>();
  change(page: number) {
    this.getPage.emit(page)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.getPage.emit(page)
  }

}
