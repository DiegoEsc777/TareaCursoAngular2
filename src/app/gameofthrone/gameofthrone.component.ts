import { Component, OnInit } from '@angular/core';
import {GameofthroneService} from '../services/gameofthrone.service'

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  constructor(private gameofthroneService:GameofthroneService) { }

  datosApi:any;

  ngOnInit(): void {
    console.log("ingresa 1, antes de llamar al servicio")
    this.getData();
  }

  getData(){
    this.gameofthroneService.getData().subscribe( resp => {
       console.log(resp);
      this.datosApi = resp;
      console.log(this.datosApi);
    })
  }

}
