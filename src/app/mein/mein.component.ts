import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import { from} from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-mein',
  templateUrl: './mein.component.html',
  styleUrls: ['./mein.component.css']
})
export class MeinComponent implements OnInit {
  mein;
  urll;
  constructor(private example : ExampleService) {
    // console.log(example.color.getValue());
    example.getConfig().pipe(
      switchMap(data => Object.entries(data).filter(([key,value]) => key=="reg.general.document_proccessing_error"))
    ).subscribe(x=> this.urll = x);
    
   }

  ngOnInit() {
  }
  onClick(){
    this.example.color.next(this.mein);
    console.log(this.example.color.getValue());
  }

}
