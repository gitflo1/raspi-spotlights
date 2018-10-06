import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface IntervalTimer {
  valueInMs: number;
  viewValue: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  intervalTimerControl = new FormControl();

  intervalTimers: IntervalTimer[] = [
    {valueInMs: 250, viewValue: '0,25 Sekunden'},
    {valueInMs: 250, viewValue: '0,5 Sekunden'},
    {valueInMs: 250, viewValue: '1 Sekunde'},
    {valueInMs: 250, viewValue: '1,5 Sekunden'},
    {valueInMs: 250, viewValue: '2 Sekunden'},
    {valueInMs: 250, viewValue: '3 Sekunden'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
