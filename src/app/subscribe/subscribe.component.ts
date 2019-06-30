import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"]
})
export class SubscribeComponent implements OnInit {
  subscribe = {};
  email: string;
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.subscribe = this.getSubscribe();
  }

  getSubscribe() {
    return this.config.getConfig().subscribe;
  }
  subscribeBtn() {
    if (!this.email) {
      alert("This field is required!");
      return;
    }

    if (this.isInputValidEmail()) {
      alert("Your subscription done successfully!");
    } else {
      alert("The Email is not correct!");
    }
  }

  isInputValidEmail() {
    let result = false;

    if (this.validateEmail(this.email)) {
      result = true;
    }

    return result;
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
