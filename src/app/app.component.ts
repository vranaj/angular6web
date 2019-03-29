import {Component, Inject, Optional, PLATFORM_ID} from '@angular/core';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6web';

  constructor(private locationStrategy: LocationStrategy,  @Inject(PLATFORM_ID) platformId: any ) {
    console.log(locationStrategy.getBaseHref());
    console.log(platformId);
  }
}
