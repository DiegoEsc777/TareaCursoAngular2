import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Harrypotter } from "../harrypotter/harrypotter.component";
import { Router } from "@angular/router"



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 
  @Input() dataInput:Harrypotter = {name:"",url:"", img:""};
  @Input() indexInput: number =0;
  @Output() selected: EventEmitter<any>;


  constructor(private router:Router) { 
    console.log("asas");
    this.selected = new EventEmitter();
 
  }
 
  
  ngOnInit(): void {
     console.log("dataInput"+this.dataInput.name);
  } 

  detail(index:number){
    console.log("index->"+index);
    this.router.navigate(['/detailharrypotter', index])
   
}

}
