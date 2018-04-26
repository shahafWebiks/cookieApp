import {Component, OnInit} from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: Place[];

  constructor(private placeService: PlaceService) {}
  ngOnInit() {
    this.getPlaces();
  }
  getPlaces(): void {
    this.placeService.getPlaces()
      .subscribe(places => this.places = places);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.placeService.addPlace({ name } as Place)
      .subscribe(place => {
        this.places.push(place);
      });
  }

  delete(place: Place): void {
    this.places = this.places.filter(h => h !== place);
    this.placeService.deletePlace(place).subscribe();
  }
}
