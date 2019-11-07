import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer;
  constructor(private example : ExampleService) { }

  ngOnInit() {
  }
  onClick(){
    this.example.bacColor.next(this.footer);
    console.log(this.example.bacColor.getValue());
  }

}
