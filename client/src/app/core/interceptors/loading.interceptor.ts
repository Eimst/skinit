import { HttpInterceptorFn } from '@angular/common/http';
import {delay, finalize, identity, pipe} from 'rxjs';
import {inject} from '@angular/core';
import {BusyService} from '../services/busy.service';
import {environment} from '../../../environments/environment';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService)
  busyService.busy()

  return next(req).pipe(
    (environment.production ? identity : delay(500)),
    finalize(() => busyService.idle())
  );
};
