import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class SettingService extends DataService {
  constructor(http: Http) {
    super(http, 'http://localhost:3000/setting/');
  }
}
