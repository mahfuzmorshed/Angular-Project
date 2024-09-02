import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { NotificationService } from "./notification.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private notificationService = inject(NotificationService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        console.error(err);
        this.notificationService.send({
          id: "",
          message:
            "Something went wrong on server side, please contact to admin!",
          severity: "error",
        });
        //  this.handleServerSideError(err);
        return throwError(() => err);
      })
    );
  }
}
