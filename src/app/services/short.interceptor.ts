import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = 'c33a6395bca4da7ca0d2d5ca7c7f7f065b3e919b';
    request = request.clone({ setHeaders: {Authorization: 'Bearer '+ TOKEN} })
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) =>{
      return throwError(error);
    }));
  }
}
