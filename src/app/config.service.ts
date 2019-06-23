import { Injectable } from "@angular/core";
import { configuration } from "./configuration";
@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() {}
  getConfig() {
    return configuration;
  }

  getPostByID(id:number) {
    return this.getConfig.blog.posts[id - 1];
  }
}
