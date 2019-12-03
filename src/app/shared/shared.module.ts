import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTrimModule } from 'ngx-trim';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    OrderModule,
    CommonModule,
    NgxTrimModule,
    ToastrModule.forRoot({ timeOut: 3000, progressBar: true, positionClass: 'toast-bottom-right' })
  ],
  declarations: []
})
export class SharedModule { }
