import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { LoggerService } from '@core/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'ng-init';

  constructor(
    private log: LoggerService,
    private appService: AppService) { }

  ngOnInit() {
    this.appService.cars('distributors').subscribe((val: any) => {
      this.log.debug(val);
    }, error => console.log(error));

  }
}
