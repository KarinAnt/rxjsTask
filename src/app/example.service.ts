import { Injectable } from '@angular/core';
import { from, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  color = new BehaviorSubject<string>('red');
  bacColor = new BehaviorSubject<string>("blue");
  constructor(private http: HttpClient) { 
  }
  getConfig() {
    return this.http.get("https://bgate-dev.star-bridge.lv/api/v1/localizations/RU");
  }
}
