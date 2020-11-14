import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesLoginService{

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url='http://160.153.253.91:3000/';
    }

    addUser(user):Observable<any>{
        let params = JSON.stringify(user);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'registryA01', params, {headers: headers});
    }
     getUser(user):Observable<any>{
        let params = JSON.stringify(user);
        console.log(params);
        let headers = new HttpHeaders().set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTYwMTg1MzYwOCwiZXhwIjoxNjAxOTQwMDA4fQ.JMKZt54bgJtIoAoUFgszPh36V5ipUnx5ns98ebRWeWUo');
        return this._http.post(this.url+'login', params, {headers: headers});
    }
}

