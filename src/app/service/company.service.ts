import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  register(data){
    return this.http.post('http://localhost:3000/empy/registerdata', data);
  }

  login(data){
    return this.http.post('http://localhost:3000/empy/login',data);
    
      }
  registerdata(){
    return this.http.get('http://localhost:3000/empy/registerlist')
  }
}