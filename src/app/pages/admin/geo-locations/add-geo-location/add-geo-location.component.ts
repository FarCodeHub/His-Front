import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { GeoLocation } from 'src/app/models/geo-location';
import { GeoLocationsComponent } from '../geo-locations.component';

@Component({
  selector: 'app-add-geo-location',
  templateUrl: './add-geo-location.component.html',
  styleUrls: ['./add-geo-location.component.scss']
})
export class AddGeoLocationComponent implements OnInit {

  @Input()
  parentLocation: GeoLocation;

  geoLocation: GeoLocation = <GeoLocation>{};


  constructor(private dataService: DataService,
    private router: Router,
    private geoLocations: GeoLocationsComponent) {

  }

  ngOnInit(): void {
  }

  save() {
    if (this.parentLocation != null)
      this.geoLocation.parentId = this.parentLocation.id;

    this.dataService.postJsonData(this.geoLocation, "GeoLocation", "").subscribe((result) => {
      this.geoLocations.loadData();
      this.geoLocations.closeModal(true);
    })
  }
}
