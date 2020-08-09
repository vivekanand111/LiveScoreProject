import { Component, OnInit, Inject } from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../services/match.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  match: Match;
  matchcopy: Match;
  errMess: string;
  matchIds: string[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
      scaleLabel:{
        display:true,
        labelString:'Overs'
      }
    }], yAxes: [{
      scaleLabel:{
        display:true,
        labelString:'Runs'
      }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['5', '10', '15', '20'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: "Team A" },
    { data: [], label: "Team B" }
  ];

  constructor(private matchservice: MatchService,
    private router: Router,
    private route: ActivatedRoute,
    private locationl : Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.matchservice.getMatchIds().subscribe(matchIds => this.matchIds = matchIds);
    this.route.params.pipe(
      switchMap((params: Params) => { 
      return this.matchservice.getMatch(params['id']); }))
    .subscribe(match => {
      this.match = match;
      this.matchcopy = match;
      //console.log(this.matchcopy.adata[0]);
      this.barChartData[0].data=this.matchcopy.adata;
      this.barChartData[0].label=String(this.matchcopy.teama);
      this.barChartData[1].label=String(this.matchcopy.teamb);
      this.barChartData[1].data =this.matchcopy.bdata;
    },
    errmess => this.errMess = <any>errmess);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
