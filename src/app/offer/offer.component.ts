import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.css"]
})
export class OfferComponent implements OnInit {
  offer = {};
  constructor(private config: ConfigService, private router: Router) {}

  ngOnInit() {
    this.offer = this.getOffer();
  }

  getOffer() {
    return this.config.getConfig().offer;
  }

  btnClick = () => {
    this.router.navigate(["/Home"]);
  };
}
