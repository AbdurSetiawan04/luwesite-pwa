import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-db';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    const data = await FavoriteRestaurantIdb.getAllRestaurant();
    data.forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });
  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
