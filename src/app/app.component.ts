import { Component, OnInit } from '@angular/core';

import { LoggerService } from '@core/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'ng-init';

  constructor(private log: LoggerService) { }

  ngOnInit() {
    this.log.info('test');
    this.log.success('test');
    this.log.warning('test');
    this.log.error('test');
  }
}
