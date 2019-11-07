import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsTask';
  inOut;
  constructor(private example : ExampleService){
    example.loginout.subscribe(x=>this.inOut = x);

  }
}
