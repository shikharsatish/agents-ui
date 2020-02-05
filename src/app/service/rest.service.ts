import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constant } from '../constant';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class RestService{

    private subject = new Subject<any>();

    constructor(private httpClient: HttpClient){}

    getAgencyList(): Observable<any>{
        const url = `${environment.apiEndPoint}${Constant.API.GET_AGENCY_LIST}`;
              return this.httpClient.get(url);
    }
}