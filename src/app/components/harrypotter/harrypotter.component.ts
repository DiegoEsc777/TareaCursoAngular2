import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../services/harrypotter.service';

export interface Harrypotter {
  name: string,
  url: string,
  img:string
}


@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  constructor(private harrypotterService: HarrypotterService) { }
  items:Harrypotter [] = [];  

  ngOnInit(): void {
    console.log("ingresa setup");
    this.setUp();    
  }
  setUp(){
    this.items = this.harrypotterService.getData(); 
    console.log(this.items);
   }

 

}



