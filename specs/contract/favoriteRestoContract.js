const itActsAsFavoriteRestoModel = (FavoriteRestaurantIdb) => {
    it('should return restaurant that has been liked', async () => {
        FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        FavoriteRestaurantIdb.putRestaurant({ id: 2 });
        FavoriteRestaurantIdb.putRestaurant({ id: 3 });
  
      expect(await FavoriteRestaurantIdb.getRestaurant(1))
        .toEqual({ id: 1 });
      expect(await FavoriteRestaurantIdb.getRestaurant(2))
        .toEqual({ id: 2 });
      expect(await FavoriteRestaurantIdb.getRestaurant(3))
        .toEqual({ id: 3 });
      expect(await FavoriteRestaurantIdb.getRestaurant(4))
        .toEqual(undefined);
    });
  
    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
        FavoriteRestaurantIdb.putRestaurant({ blank: 'blank' });
  
      expect(await FavoriteRestaurantIdb.getAllRestaurant())
        .toEqual([]);
    });
  
    it('should can return all of the restaurant that have been added', async () => {
        FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        FavoriteRestaurantIdb.putRestaurant({ id: 2 });
        FavoriteRestaurantIdb.putRestaurant({ id: 3 });
  
      expect(await FavoriteRestaurantIdb.getAllRestaurant())
        .toEqual([
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]);
    });
  
    it('should can remove restaurant that have been added', async () => {
        FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        FavoriteRestaurantIdb.putRestaurant({ id: 2 });
        FavoriteRestaurantIdb.putRestaurant({ id: 3 });
  
        FavoriteRestaurantIdb.deleteRestaurant(1);
  
      expect(await FavoriteRestaurantIdb.getAllRestaurant())
        .toEqual([
          { id: 2 },
          { id: 3 },
        ]);
    });
  
    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
        FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        FavoriteRestaurantIdb.putRestaurant({ id: 2 });
        FavoriteRestaurantIdb.putRestaurant({ id: 3 });
  
        FavoriteRestaurantIdb.deleteRestaurant(4);
  
      expect(await FavoriteRestaurantIdb.getAllRestaurant())
        .toEqual([
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]);
    });
  };
  
  export { itActsAsFavoriteRestoModel };
  