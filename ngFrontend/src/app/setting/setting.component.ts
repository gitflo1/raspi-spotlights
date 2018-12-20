import { Component, OnInit, Testability } from '@angular/core';
import { SettingService, Setting } from '../services/setting.service';

export interface ISettingTime {
  valueInMs: number;
  viewValue: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  intervalTimes: ISettingTime[] = [
    {valueInMs: 250, viewValue: '0,25 Sekunden'},
    {valueInMs: 500, viewValue: '0,5 Sekunden'},
    {valueInMs: 1000, viewValue: '1 Sekunde'},
    {valueInMs: 1500, viewValue: '1,5 Sekunden'},
    {valueInMs: 2000, viewValue: '2 Sekunden'},
    {valueInMs: 3000, viewValue: '3 Sekunden'}
  ];

  shutdownTimes: ISettingTime[] = [
    {valueInMs: 0, viewValue: '0 Sekunden'},
    {valueInMs: 5000, viewValue: '5 Sekunden'},
    {valueInMs: 10000, viewValue: '10 Sekunde'},
    {valueInMs: 15000, viewValue: '15 Sekunden'},
    {valueInMs: 20000, viewValue: '20 Sekunden'},
    {valueInMs: 30000, viewValue: '30 Sekunden'},
    {valueInMs: 45000, viewValue: '45 Sekunden'},
    {valueInMs: 60000, viewValue: '60 Sekunden'},
    {valueInMs: 120000, viewValue: '120 Sekunden'},
    {valueInMs: 180000, viewValue: '180 Sekunden'}
  ];

  selectedValueInMs = this.shutdownTimes[0].valueInMs;
  setting: Setting;

  constructor(private settingsService: SettingService) {
    this.setting = {
      _id: 42,
      last_updated: Date.now(),
      interval_time: 0,
      shutdown_time: 0,
      shutdown_with_interval: false,
      shutdown_on_second_signal: false
    };
  }

  ngOnInit() {
    this.settingsService.getAll()
      .subscribe(
        (data: Setting) => {
          this.setting = data;
          console.log(data);
        });
  }

  // Update settings
  updateSettings(setting: Setting) {
    console.log(setting);
    this.settingsService.update(setting)
      .subscribe(
        (data: Setting) => {
          this.setting = data;
          console.log(data);
      });
  }
}

