import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"]
})
export class SubscribeComponent implements OnInit {
  subscribe = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.subscribe = this.getSubscribe();
  }

  getSubscribe() {
    return this.config.getConfig().subscribe;
  }
}
