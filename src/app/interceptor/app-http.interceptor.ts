import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/management/signin")) {
      const token = localStorage.getItem('token');
      if (token !== null) {
        let newRequest = request.clone({
          setHeaders: {
            token: token
          }
        });
        return next.handle(newRequest);
      } else {
        console.error("Token not found in localStorage");
        return next.handle(request);
      }
    } else {
      return next.handle(request);
    }
  }
}
