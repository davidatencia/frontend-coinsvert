import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesEditarPerfilService{

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url="http://160.153.253.91:3000/";
    }

    EditarInformacion(NewInfo):Observable<any>{
        let params = JSON.stringify(NewInfo);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+"", params, {headers: headers});
    }

    
}

