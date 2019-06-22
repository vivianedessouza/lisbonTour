import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-packages",
  templateUrl: "./packages.component.html",
  styleUrls: ["./packages.component.css"]
})
export class PackagesComponent implements OnInit {
  package = {};

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.package = this.getPackage();
  }

  getPackage() {
    return this.config.getConfig().package;
  }
}
