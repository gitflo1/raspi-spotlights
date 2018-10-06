import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    {valueInMs: 250, viewValue: '0,5 Sekunden'},
    {valueInMs: 250, viewValue: '1 Sekunde'},
    {valueInMs: 250, viewValue: '1,5 Sekunden'},
    {valueInMs: 250, viewValue: '2 Sekunden'},
    {valueInMs: 250, viewValue: '3 Sekunden'}
  ];

  shutdownTimes: ISettingTime[] = [
    {valueInMs: 250, viewValue: '0 Sekunden'},
    {valueInMs: 250, viewValue: '5 Sekunden'},
    {valueInMs: 250, viewValue: '10 Sekunde'},
    {valueInMs: 250, viewValue: '15 Sekunden'},
    {valueInMs: 250, viewValue: '20 Sekunden'},
    {valueInMs: 250, viewValue: '30 Sekunden'},
    {valueInMs: 250, viewValue: '45 Sekunden'},
    {valueInMs: 250, viewValue: '60 Sekunden'},
    {valueInMs: 250, viewValue: '120 Sekunden'},
    {valueInMs: 250, viewValue: '180 Sekunden'}
  ];

  restItems: any;
  restItemsUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      );
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
