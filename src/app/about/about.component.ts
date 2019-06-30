import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  about = {};
  attractions = [];
  time: string;
  date: string;
  members: string;
  duration: string;
  attraction: string;

  constructor(private config: ConfigService, private router: Router) {}

  ngOnInit() {
    this.about = this.getAbout();
    this.fetchAttractions();
  }

  getAbout() {
    return this.config.getConfig().about;
  }

  fetchAttractions() {
    fetch("http://localhost:4000/api/attractions")
      .then(response => response.json())
      .then(data => {
        this.attractions = data;
      });
  }

  handleBtn() {
    if (this.isInputValid()) {
      const bodyRequest = JSON.stringify({
        time: this.time,
        date: this.date,
        duration: this.duration,
        members: this.members,
        attraction: this.attraction
      });

      fetch("http://localhost:4000/api/attractions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: bodyRequest
      })
        .then(response => response.json())
        .then(data => {
          alert("Reservation done successfully!");
        });
    } else {
      alert("All fields are required!");
    }
  }

  isInputValid() {
    if (
      this.time &&
      this.date &&
      this.duration &&
      this.members &&
      this.attraction
    ) {
      return true;
    }
    return false;
  }

  btnClick = () => {
    this.router.navigate(["/Destination"]);
  };
}
