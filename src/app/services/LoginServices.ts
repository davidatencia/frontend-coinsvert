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
        return this._http.post(this.url+'singup', params, {headers: headers});
    }

     getUser(user):Observable<any>{
        let params = JSON.stringify(user);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'login', params, {headers: headers});
    }
}

