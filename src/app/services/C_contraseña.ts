import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesCPasswordService{

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url='http://160.153.253.91:3000/';
    }

     Cpassword(npassword):Observable<any>{
        let params = JSON.stringify(npassword);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'fail_pass', params, {headers: headers});
    }
}

