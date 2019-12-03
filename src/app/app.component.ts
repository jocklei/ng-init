import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'ng-init';

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.warning('Hello world!', 'Toastr fun!');
    this.toastr.info('Hello world!', 'Toastr fun!');
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
}
