import {Injectable} from "@angular/core";
import * as L from "leaflet";

import {ZOOM, LAT, LNG} from "./config";
import {Marker} from "./types";

@Injectable()
export class Actions {
  private map: any;

  constructor() {}

  init = () => {
    this.map = L.map('mapid').setView([LAT, LNG], ZOOM);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);
  }

  addMarker = (marker: Marker) => {
    if(marker.status)
      return;

    marker.status = 'onMap';
    let leafletMarker = L.marker([marker.lat, marker.lng]).addTo(this.map);

    leafletMarker.on('mouseover', () => {
      marker.status = 'rightList';
      leafletMarker.remove();
    });

  }

  addMarkerLevel2 = (markers: Marker[]) => {
    markers.forEach(m => this.addMarker(m))
  }

  addMarkerLevel1 = (markers: Marker[][]) => {
    markers.forEach(ms => this.addMarkerLevel2(ms));
  }

  deleteFromRightList = (marker: Marker) => {
    marker.status = '';
  }
}
