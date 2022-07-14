import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GraphicService} from "../graphic.service";
import Chart, {ChartData} from "chart.js/auto";

interface GraphicData {
  dt_date: string,
  office_id: number,
  office: string,
  qty_shk: number,
  qty_shk_cat1: number,
  qty_shk_cat2: number,
  qty_shk_cat3: number,
  qty_shk_cat4: number
}


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  providers: [GraphicService]
})
export class GraphicsComponent implements OnInit, AfterViewInit {

  @ViewChild('linechart')
  private lineChartRef: ElementRef;
  private lineChart: Chart;
  lineData: ChartData

  @ViewChild('piechart')
  private pieChartRef: ElementRef;
  private pieChart: Chart;
  pieData: ChartData

  graphicData: GraphicData[]

  constructor(private graphicService: GraphicService) {
  }

  ngOnInit(): void {
    this.graphicService.get("https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json").subscribe((value: any) => {
      this.graphicData = value.data;
    })
    this.graphicData.sort((prev, next): number => {
      if (prev.dt_date < next.dt_date) {
        return -1;
      }
      if (prev.dt_date < next.dt_date) {
        return 1;
      }
      return 0;
    })

  }



  ngAfterViewInit(): void {

    this.lineData = {
      labels: this.graphicData.map(elemData => elemData.dt_date).sort(),
      datasets: [

        {
          label: 'Всего',
          data: this.graphicData.map(elemData => elemData.qty_shk),
          fill: false,
          borderColor: 'rgb(238,2,2)',
          tension: 0.1
        },



        {
          label: 'Этап 1',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat1),
          fill: false,
          borderColor: 'rgb(100,143,81)',
          tension: 0.1
        },
        {
          label: 'Этап 2',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat2),
          fill: false,
          borderColor: 'rgb(45,183,48)',
          tension: 0.1
        },
        {
          label: 'Этап 3',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat3),
          fill: false,
          borderColor: 'rgb(11,76,220)',
          tension: 0.1
        },
        {
          label: 'Этап 4',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat4),
          fill: false,
          borderColor: 'rgb(129,15,238)',
          tension: 0.1
        }]
    }

    this.pieData = {
      labels: ['Этап 1', 'Этап 2', 'Этап 3', 'Этап 4'],
      datasets: [
        {
          data: [
            this.graphicData.reduce((acc, elemData) => acc+= elemData.qty_shk_cat1, 0),
            this.graphicData.reduce((acc, elemData) => acc+= elemData.qty_shk_cat2, 0),
            this.graphicData.reduce((acc, elemData) => acc+= elemData.qty_shk_cat3, 0),
            this.graphicData.reduce((acc, elemData) => acc+= elemData.qty_shk_cat4, 0),
          ],
          backgroundColor: [
            'rgb(100,143,81)',
            'rgb(45,183,48)',
            'rgb(11,76,220)',
            'rgb(129,15,238)'
          ],
          hoverOffset: 4
        }]
    }
  }

  paintGraph() {
    this.lineChart = new Chart(this.lineChartRef.nativeElement, {
      type: 'line',
      data: this.lineData,
    })
    this.pieChart = new Chart(this.pieChartRef.nativeElement, {
      type: 'pie',
      data: this.pieData,
    })
  }
}
