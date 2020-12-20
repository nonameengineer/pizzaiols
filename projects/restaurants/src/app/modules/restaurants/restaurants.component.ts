import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants/restaurants.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurants/restaurant';

@Component({
  selector: 'restaurants-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  readonly restaurants: Observable<Restaurant[]> = this.restaurantsService.getRestaurants();

  constructor(private restaurantsService: RestaurantsService) { }
}
