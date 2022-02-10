import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  
  private itemsHarry:any = [
    {      
      name:"Gryffindor",
      url :  "gryffindor",
      img : "./assets/img/Gryffindor-Logo.png"
    },
    {
      name:"hufflepuff",
      url : "PlayStation",
      img : "./assets/img/hufflepuff.jpg"
    }
    ,
    {
      name:"slytherin",
      url : "slytherin",
      img : "./assets/img/Logo_Slytherin_2.jpg"
    }
  ];
  varapi = 'https://hp-api.herokuapp.com/api/characters';
  constructor(private http:HttpClient) { }


  getData(){
    return this.itemsHarry;
  }
   

  


  getData2(id:any): Observable<any>{
    console.log("servicio a ejecutar"+id);
    return this.http.get(this.varapi+"/house/"+id);
  }
}
