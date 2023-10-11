import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {headerGet} from "./state-header/header-page.actions";
import {headerSelector} from "./state-header/header-page.reducer";
import {Store} from "@ngrx/store";
import {distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  user = ''

  constructor(public service: AppService, private store: Store) {
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.store.dispatch(headerGet())
    this.store.select(headerSelector).subscribe(
      (username) => {
        this.user = username;
      }
    );
  }
}

