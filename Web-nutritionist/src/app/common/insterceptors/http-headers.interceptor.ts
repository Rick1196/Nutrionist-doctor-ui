import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor(private _cookie:CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('SESSIONID')){
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('SESSIONID')}`
        }
      });
    
      return next.handle(authReq);
    }else{
      return next.handle(request);
    }
  }
}
