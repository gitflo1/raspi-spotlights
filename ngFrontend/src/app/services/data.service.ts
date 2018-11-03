import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http, private url: string) { }

  getAll() {
    return this.http.get(this.url).pipe(
      map(response => response.json()),
      catchError(error => this.handleError(error))
    );
  }

  getOne(id: number) {
    return this.http.get(this.url + id).pipe(
      map(response => response.json()),
      catchError(error => this.handleError(error))
    );
  }

  update(resource) {
    return this.http.put(this.url + resource._id, JSON.stringify(resource)).pipe(
      map(response => response.json()),
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
