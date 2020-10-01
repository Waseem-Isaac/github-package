import { core } from '@angular/compiler';
import { Component } from '@angular/core';
import { CoreService } from 'components-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  constructor(private coreService: CoreService) {
    coreService.testService();
  }
}
