import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

let favorites = [];

const favoriteRestoArray = {
    getRestaurant(id) {
    if (!id) {
      return;
    }

    return favorites.find((resto) => resto.id === id);
  },

  getAllRestaurant() {
    return favorites;
  },

  putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(resto.id)) {
      return;
    }

    favorites.push(resto);
  },

  deleteRestaurant(id) {
    favorites = favorites.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favorites = []));

  itActsAsFavoriteRestoModel(favoriteRestoArray);
});
