import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constant } from '../../constant';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class RestService{

    private subject = new Subject<any>();

    agencyList: any;

    constructor(private httpClient: HttpClient){}

    getAgencyList(): Observable<any>{
        const url = `${environment.apiEndPoint}${Constant.API.GET_AGENCY_LIST}`;
         return this.httpClient.get(url);
    }

    getCompanyList(): Observable<any>{
      const url = `${environment.apiEndPoint}${Constant.API.GET_COMPANY_LIST}`;
      return this.httpClient.get(url);
    }

    postUser(body, id){
      const url = `${environment.apiEndPoint}${Constant.API.ADD_USER}`;
      const headers = new HttpHeaders().set(
        'Content-Type', 'application/json').set(
            'Access-Control-Allow-Origin', '*').set(
                'Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
    return this.httpClient.post(url, body, {headers});
    }

    putRequest(url: string, body, id){
      const headers = new HttpHeaders().set(
        'Content-Type', 'application/json').set(
            'Access-Control-Allow-Origin', '*').set(
                'Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
    console.log('--------RestFul service about to invoke....');
    return this.httpClient.put(url, body, { headers });
    }
    // rest template and interceptor
    //configure ts lint
    //breadcrumbs
}