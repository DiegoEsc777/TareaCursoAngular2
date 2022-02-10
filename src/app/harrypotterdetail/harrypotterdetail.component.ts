import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Harrypotter } from "../components/harrypotter/harrypotter.component";
import { Router } from "@angular/router"
import { HarrypotterService } from "../services/harrypotter.service"

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-harrypotterdetail',
  templateUrl: './harrypotterdetail.component.html',
  styleUrls: ['./harrypotterdetail.component.css']
})
export class HarrypotterdetailComponent implements OnInit {

  @Input() dataInput:Harrypotter = {name:"",url:"",img:""};
  @Input() indexInput: number =0;
 
  /*
@Output() selected: EventEmitter<any>;
*/

 paramVar :string ="";
  constructor(private router:Router, private _routeParams: ActivatedRoute, private harrypotterService:HarrypotterService) { 
  
    this._routeParams.params.subscribe(params => {
      console.log("test"+params['var']);
      this.paramVar = params['var'];
  });
 
  }



  datosApiRest:any;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.harrypotterService.getData2(this.paramVar).subscribe( resp => {
       console.log(resp);
      this.datosApiRest = resp;
      console.log(this.datosApiRest);
    })
  }

}
