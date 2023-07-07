import FavoriteRestaurantIdb from "../src/scripts/data/favoriterestaurant-db";
import * as helper from './helpers/testFactories';

describe('Liking A Restorant', () => {
    const likeButtonContainer = () => {
      document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
  
    beforeEach(() => {
      likeButtonContainer();
    });
  
    it('should bring up a like button when you do not like the restaurant', async () => {
      await helper.testFactories({ id: 1 });
  
      expect(document.querySelector('.likee'))
        .toBeTruthy();
    });
  
    it('should not bring up a like button when you do not like the restaurant', async () => {
      await helper.testFactories({ id: 1 });
  
      expect(document.querySelector('.unlike'))
        .toBeFalsy();
    });
  
    it('should be able to like the restaurant', async () => {
      await helper.testFactories({ id: 1 });
  
      document.querySelector('.likee')
        .dispatchEvent(new Event('click'));
      const resto = await FavoriteRestaurantIdb.getRestaurant(1);
  
      expect(resto)
        .toEqual({ id: 1 });
  
      FavoriteRestaurantIdb.deleteRestaurant(1);
    });
  
    it('should not be able to like the restaurant when restaurant alredy liked', async () => {
      await helper.testFactories({ id: 1 });
  
      FavoriteRestaurantIdb.putRestaurant({ id: 1 });
      document.querySelector('.likee')
        .dispatchEvent(new Event('click'));
  
      expect(await FavoriteRestaurantIdb.getAllRestaurant())
        .toEqual([{ id: 1 }]);
  
      FavoriteRestaurantIdb.deleteRestaurant(1);
    });
  
    it('should not be able to like the restaurant whenit not has id', async () => {
      await helper.testFactories({});
      document.querySelector('.likee')
        .dispatchEvent(new Event('click'));
  
      expect(await FavoriteRestaurantIdb.getAllRestaurant())
        .toEqual([]);
  
      FavoriteRestaurantIdb.deleteRestaurant(1);
    });
  });
  