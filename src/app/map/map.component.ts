import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Map as olMap } from 'ol';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  private map: olMap | null = null;

  constructor(private mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.map;
    if (this.map) {
      this.map.setTarget('map');
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.setTarget(undefined);
    }
  }

}
