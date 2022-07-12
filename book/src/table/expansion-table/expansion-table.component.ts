import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTable, MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
  extended?: Object;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]



@Component({
  selector: 'app-expansion-table',
  templateUrl: './expansion-table.component.html',
  styleUrls: ['./expansion-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpansionTableComponent implements AfterViewInit {

  extendedData = [
    {position: 24, name: 'ElementName', weight: 881.9950604495106, displayedInCell: 'Is not gas'},
    {position: 18, name: 'ElementName', weight: 797.1882834817152, displayedInCell: 'Is not gas'},
    {position: 81, name: 'ElementName', weight: 83.27795127138148, displayedInCell: 'Is not gas'},
    {position: 12, name: 'ElementName', weight: 484.7582920570088, displayedInCell: 'Is not gas'},
    {position: 37, name: 'ElementName', weight: 97.37565904722523, displayedInCell: 'Is not gas'},
    {position: 42, name: 'ElementName', weight: 807.5197617071963, displayedInCell: 'Is not gas'},
    {position: 87, name: 'ElementName', weight: 82.77845613163004, displayedInCell: 'Is not gas'},
    {position: 10, name: 'ElementName', weight: 203.494457177799, displayedInCell: 'Is not gas'},
    {position: 73, name: 'ElementName', weight: 228.65816441155462, displayedInCell: 'Is not gas'},
    {position: 6, name: 'ElementName', weight: 767.8192773812831, displayedInCell: 'Is not gas'},
  ]

  dataSource = new MatTableDataSource<PeriodicElement>;
  columnsToDisplay = ["name", 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;
  constructor() {
    ELEMENT_DATA.forEach(el =>  {  el.extended = this.extendedData} )
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    ELEMENT_DATA.push(ELEMENT_DATA[randomElementIndex])
    this.dataSource.data = ELEMENT_DATA;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }



}


