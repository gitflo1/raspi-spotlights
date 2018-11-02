import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private url = 'http://localhost:3000/setting/';
  constructor(private http: Http) { }

  getSettings() {
    return this.http.get(this.url);
  }

  updateSettings(setting) {
    return this.http.put(this.url + setting.id, JSON.stringify(setting));
  }
}
