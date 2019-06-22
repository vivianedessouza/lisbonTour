import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
destination = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.destination = this.getDestination();
  }

  getDestination() {
    return this.config.getConfig().destination;
  }

}
