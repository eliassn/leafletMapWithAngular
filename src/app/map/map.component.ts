
import { Component, AfterViewInit } from '@angular/core';

import * as L from "leaflet"
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
   private map: any
  constructor(private mapService : MapService) { }

  ngAfterViewInit(): void {
      this.initMap()
      this.mapService.makeMarkers(this.map)
  }
private initMap():void{
this.map = L.map('map',).setView([48.7996, 2.3511], 15)
const tiles = L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 3,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>,&copy; <a href="https://stadiamaps.com">Stadia Maps</a>,&copy; <a href="https://openmaptiles.org">OpenMapTiles</a> contributors'
  
});
tiles.addTo(this.map)
}
}
