import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {LogoutService} from "./logout.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  constructor(private cookieService: CookieService, private logout: LogoutService) {}

  ngOnInit() {
    this.cookieService.deleteAll()
    this.logout.logout()
  }

}
