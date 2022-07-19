import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GraphicService} from "../services/graphic.service";
import Chart, {ChartData} from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

export interface ReceivedData {
  data: GraphicData[]
}

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  providers: [GraphicService]
})
export class GraphicsComponent implements OnInit {

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
    this.graphicService.get("https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json").subscribe((value: ReceivedData) => {
        this.graphicData = value.data;
      },
      error => {
      },
      () => {
        this.paintGraph()
      })
  }

  paintGraph() {

    this.graphicData.sort((prev, next): number => {
      if (prev.dt_date < next.dt_date) {
        return -1;
      }
      if (prev.dt_date < next.dt_date) {
        return 1;
      }
      return 0;
    })

    this.lineData = {
      labels: this.graphicData.map(elemData => elemData.dt_date),
      datasets: [
        {
          label: 'Всего',
          data: this.graphicData.map(elemData => elemData.qty_shk),
          fill: false,
          borderColor: 'rgb(238,2,2)',
          backgroundColor: 'rgb(238,2,2)',
          tension: 0.1,

        },
        {
          label: 'Этап 1',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat1),
          fill: false,
          borderColor: 'rgb(100,143,81)',
          backgroundColor: 'rgb(100,143,81)',
          tension: 0.1
        },
        {
          label: 'Этап 2',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat2),
          fill: false,
          borderColor: 'rgb(45,183,48)',
          backgroundColor: 'rgb(45,183,48)',
          tension: 0.1
        },
        {
          label: 'Этап 3',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat3),
          fill: false,
          borderColor: 'rgb(11,76,220)',
          backgroundColor: 'rgb(11,76,220)',
          tension: 0.1
        },
        {
          label: 'Этап 4',
          data: this.graphicData.map(elemData => elemData.qty_shk_cat4),
          fill: false,
          borderColor: 'rgb(129,15,238)',
          backgroundColor: 'rgb(129,15,238)',
          tension: 0.1,
        }]
    }



    this.lineChart = new Chart(this.lineChartRef.nativeElement, {
      plugins: [ChartDataLabels],
      type: 'line',
      data: this.lineData,
      options: {
        plugins: {
          datalabels: {
            color: 'black',
            formatter: Math.round,
            align: "top",
            display: "auto",
            offset: 5,
            textStrokeWidth: 0.4,
            clamp: true
          }
        },
        layout: {
          padding: 10
        },


      }
      })

    this.pieData = {
      labels: ['Этап 1', 'Этап 2', 'Этап 3', 'Этап 4'],
      datasets: [
        {
          data: [
            this.graphicData.reduce((acc, elemData) => acc += elemData.qty_shk_cat1, 0),
            this.graphicData.reduce((acc, elemData) => acc += elemData.qty_shk_cat2, 0),
            this.graphicData.reduce((acc, elemData) => acc += elemData.qty_shk_cat3, 0),
            this.graphicData.reduce((acc, elemData) => acc += elemData.qty_shk_cat4, 0),
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

    this.pieChart = new Chart(this.pieChartRef.nativeElement, {
      type: 'pie',
      data: this.pieData,
    })

  }
  }
