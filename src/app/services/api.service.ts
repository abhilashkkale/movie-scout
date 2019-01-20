declare var require: any

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "src/app/app.constants";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, public appConstants:AppConstants) { }

  getMovieData():Observable<any>{
    return this.http.get(this.appConstants.API_LINK)
  }

  getMovieDataFromJson():Observable<any>{
     var data = require("src/assets/json/movies.json");
     return new Observable(observer => { observer.next(data) });
  }
}
