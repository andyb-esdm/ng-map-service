import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Map as olMap } from 'ol';
import { WfsService } from '../wfs.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  private map: olMap | null = null;

  constructor(private mapService: MapService, private wfsService: WfsService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.map;
    if (this.map) {
      this.map.setTarget('map');

      this.map.addLayer(this.wfsService.getLayer());
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.setTarget(undefined);
    }
  }

}
