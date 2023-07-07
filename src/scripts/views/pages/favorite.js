import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';
import { template } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favcontent">
      <h2 class="content__heading">Your Liked Catalogue</h2>
      <div id="restaurantcatalogue" class="main">
    </div>
    </div>`;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantcontainer = document.querySelector('#restaurantcatalogue');

    if (restaurant.length === 0) {
      restaurantcontainer.innerHTML = 'No Favorite Restaurant Yet';
    }

    restaurant.forEach((restoran) => {
      restaurantcontainer.innerHTML += template(restoran);
    });
  },

};

export default Favorite;
