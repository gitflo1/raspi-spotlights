import { Setting } from './setting.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Setting {
  _id: 42;
  last_updated: any;
  interval_time: number;
  shutdown_time: number;
  shutdown_with_interval: boolean;
  shutdown_on_second_signal: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private url = 'http://localhost:3000/settings/';
  private setting: Setting;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Setting>(this.url)
    .pipe(
      catchError(error => this.handleError(error))
    );
  }

  update(setting: Setting) {
    console.log('RESOURCE: ' + setting);
    return this.http.put<Setting>(this.url, setting)
    .pipe(
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
      // this.form.setErrors(error.originalError);
    }
    return Observable.throw(new AppError(error.json()));
  }
}
