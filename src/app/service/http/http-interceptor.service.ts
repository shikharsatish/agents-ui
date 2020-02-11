import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const header = new HttpHeaders({
      'Authorization': 'david'
    });

    const clone = req.clone({
      headers: header
    });
    return next.handle(clone).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    console.log("error occurred!");
    return throwError(error);
  }

}
