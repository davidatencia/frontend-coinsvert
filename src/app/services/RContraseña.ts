import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesRecuperarPasswordService{

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url='https://160.153.253.91:3000/';
    }

    Rpassword(correo: String):Observable<any>{
        let params = JSON.stringify(correo);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'forgot_pass/:email', params, {headers: headers});
    }
}

