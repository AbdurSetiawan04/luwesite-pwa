import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-db';
import * as helper from './helpers/testFactories';

describe('Unlike A Restaurant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    likeButtonContainer();
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(() => {
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await helper.testFactories({ id: 1 });

    expect(document.querySelector('.unlike'))
      .toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await helper.testFactories({ id: 1 });

    expect(document.querySelector('.likee'))
      .toBeFalsy();
  });

  it('should be able to unliking', async () => {
    await helper.testFactories({ id: 1 });

    document.querySelector('.unlike')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant())
      .toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await helper.testFactories({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('.unlike')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant())
      .toEqual([]);
  });
});
