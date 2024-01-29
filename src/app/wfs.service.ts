import { Injectable } from '@angular/core';
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
// import GeoJSON from 'ol/format/GeoJSON';
import WFS from 'ol/format/WFS';

@Injectable({
  providedIn: 'root'
})
export class WfsService {

  private url = 'https://dservices1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/services/Countries_December_2022_UK_BUC/WFSServer?service=WFS&version=1.1.0&request=GetFeature&typeName=CTRY_DEC_2022_UK_BUC';
  getLayer(): VectorLayer<VectorSource<Feature<Geometry>>> {
    const vectorSource = new VectorSource({
      // format: new GeoJSON(),
      format: new WFS(),
      url: this.url,
    });

    return new VectorLayer({
      source: vectorSource,
    });
  }
}
