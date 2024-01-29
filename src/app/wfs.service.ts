import { Injectable } from '@angular/core';
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
// import GeoJSON from 'ol/format/GeoJSON';
import WFS from 'ol/format/WFS';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';

@Injectable({
  providedIn: 'root'
})
export class WfsService {

  private url = 'https://dservices1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/services/Countries_December_2022_UK_BUC/WFSServer?service=WFS&version=1.1.0&request=GetFeature&typeName=CTRY_DEC_2022_UK_BUC';
  getLayer(): VectorLayer<VectorSource<Feature<Geometry>>> {
    const stroke = new Stroke({ color: 'black', width: 2 });
    const fill = new Fill({ color: 'red' });
    const style = new Style({
      stroke,
      // fill
    });

    const vectorSource = new VectorSource({
      // format: new GeoJSON(),
      format: new WFS(),
      url: this.url,
    });

    return new VectorLayer({
      source: vectorSource,
      style
    });
  }
}
