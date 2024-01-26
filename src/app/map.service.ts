import { Injectable } from '@angular/core';
import { View, Map as olMap } from 'ol'
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  readonly map: olMap | null;
  constructor() {
    this.map = this.createMap();
  }

  private createMap(): olMap {
    const centre = fromLonLat([-3.136, 51.86])
    const map = new olMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: centre,
        zoom: 12,
      }),
    });
    return map;
  }
}
