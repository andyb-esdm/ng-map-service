import { Injectable } from '@angular/core';
import { View, Map as olMap } from 'ol'
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Projection, fromLonLat } from 'ol/proj';
import proj4 from 'proj4';
import { get as getProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';

proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 ' +
  '+x_0=400000 +y_0=-100000 +ellps=airy ' +
  '+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 ' +
  '+units=m +no_defs');
register(proj4);
const proj27700 = getProjection('EPSG:27700') as Projection;
// proj27700.setExtent([0, 0, 700000, 1300000]);


@Injectable({
  providedIn: 'root'
})
export class MapService {
  readonly map: olMap | null;
  constructor() {
    this.map = this.createMap();
  }

  private createMap(): olMap {
    // const centre = fromLonLat([-3.136, 51.86])
    const centre = [500000, 500000]
    const map = new olMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        projection: proj27700,
        center: centre,
        zoom: 12,
      }),
    });
    return map;
  }
}
