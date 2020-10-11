import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class PeticionesService{

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url="http://localhost:3000/";
    }

    addUser(user):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        console.log("addUser")
        return this._http.post(this.url+"login", params, {headers: headers});
    }
    getUserList():Observable<any>{
        let headers = new HttpHeaders().set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTYwMTg1MzYwOCwiZXhwIjoxNjAxOTQwMDA4fQ.JMKZt54bgJtIoAoUFgszPh36V5ipUnx5ns98ebRWeWUo');
        return this._http.get(this.url+"users", {headers: headers});
        //return this._http.get(this.url+"users");
    }
}

