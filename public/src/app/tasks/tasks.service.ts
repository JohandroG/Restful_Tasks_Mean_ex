import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {



  constructor(private _http: HttpClient) {
    this.requestTasks();
  }

  requestTasks():void{
    this._http.get("http://localhost:8080/tasks/")
    .subscribe((data:any) => {
      console.log(data);
    });
  }

  selectTask(title:string):void{
    this._http.get(`http://localhost:8080/tasks/${title}`)
    .subscribe((data:any) => {
      console.log(data);
    });
  }

}
