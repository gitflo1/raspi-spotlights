import { SettingSchema } from './../../../../nodeBackend/app/models/settingModel';
import { Component, OnInit, Testability } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { SettingService } from '../services/setting.service';
import { Response } from 'selenium-webdriver/http';

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

  restItems: any;

  selectedValueInMs = this.shutdownTimes[0].valueInMs;
  setting: any;

  constructor(private service: SettingService) {}

  ngOnInit() {
    this.service.getSettings().subscribe(response => console.log(response.json()));
  }

  // Post new settings
  updateSettings(setting: HTMLInputElement) {
    this.service.updateSettings(setting).subscribe(response => {
      console.log(response.json());
    });
  }

  // Read all REST Items
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems()
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     );
  // }

  // Rest Items Service: Read all REST Items
  // restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.restItemsUrl + 'setting')
  //     .pipe(map(data => data));
  // }
}
