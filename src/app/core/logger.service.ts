import { Injectable } from '@angular/core';

import { ToastrService, IndividualConfig } from 'ngx-toastr';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class LoggerService {

  toastrConfigInit = {
    timeOut: 3000,
    progressBar: true,
    positionClass: 'toast-bottom-right'
  };

  constructor(private toastrService: ToastrService) { }

  info(message: string, toastrConfig?: IndividualConfig) {
    this.toastr('info', message, Object.assign(this.toastrConfigInit, toastrConfig || {}));
  }

  success(message: string, toastrConfig?: IndividualConfig) {
    this.toastr('success', message, Object.assign(this.toastrConfigInit, toastrConfig || {}));
  }

  warning(message: string, toastrConfig?: IndividualConfig) {
    this.toastr('warning', message, Object.assign(this.toastrConfigInit, toastrConfig || {}));
  }

  error(message: string, toastrConfig?: IndividualConfig) {
    if (!environment.production) {
      this.toastr('error', message, Object.assign(this.toastrConfigInit, toastrConfig || {}));
    }
  }

  debug(data: any) {
    if (!environment.production) {
      console.log(data);
    }
  }

  toastr(type: string, message: string, overrides?: any) {
    switch (type) {
      case 'info':
        this.toastrService.info(message, null, overrides);
        break;
      case 'success':
        this.toastrService.success(message, null, overrides);
        break;
      case 'warning':
        this.toastrService.warning(message, null, overrides);
        break;
      case 'error':
        this.toastrService.error(message, null, overrides);
        break;
      default:
        throw new Error('NOT IMPLEMENT!');
    }
  }
}
