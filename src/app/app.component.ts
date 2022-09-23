import { Component,OnInit } from '@angular/core';
declare function func():any;
//declare function greet():any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GettingStarted';
  ngOnInit(): void
  {
    func();
  }
  
}
