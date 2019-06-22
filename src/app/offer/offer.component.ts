import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.css"]
})
export class OfferComponent implements OnInit {
  offer = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.offer = this.getOffer();
  }

  getOffer() {
    return this.config.getConfig().offer;
  }
}
