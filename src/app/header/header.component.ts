import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  colorText;
  backgroundColor;
  constructor(private example : ExampleService) { 
    example.color.subscribe(x=>this.colorText = x);
    example.bacColor.subscribe(x=>this.backgroundColor = x);
  }

  ngOnInit() {
  }

}
