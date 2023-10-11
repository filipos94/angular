import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angularjs';
  constructor(private service: AppService, private store: Store, private route: ActivatedRoute) {
  }
  isHomeRoute() {
    console.log("Home")
    return this.route.snapshot.routeConfig?.path === '';
  }

  isAnotherRoute() {
    console.log("Not home")
    return this.route.snapshot.routeConfig?.path != '';
  }
}
