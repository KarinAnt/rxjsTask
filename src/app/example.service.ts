import { Injectable } from '@angular/core';
import { from, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  color = new BehaviorSubject<string>('red');
  bacColor = new BehaviorSubject<string>("blue");
  loginout = new BehaviorSubject<boolean>(false);
  errora = new BehaviorSubject<string>(null);
  constructor(private http: HttpClient) { 
  }
  getConfig() {
    // return this.http.get("https://bgate-dev.star-bggridge.lv/api/v1/localizations/RU");
    return this.http.get("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts");
  }
  logIn(){
    this.loginout.next(true);
  }
  logOut(){
    this.loginout.next(false);
  }
  errorurl(){
    
     this.getConfig().subscribe(
      res => console.log('HTTP response', res) ,
      err =>this.errora.error('ERROR') ,
      () => console.log('HTTP request completed.'),
  );
  
  }
}
