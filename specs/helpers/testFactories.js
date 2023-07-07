import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from "../../src/scripts/data/favoriterestaurant-db";

const testFactories = async (restaurant) => {
    await LikeButtonInitiator.init({
        likebuttoncontainer: document.querySelector('#likeButtonContainer'),
        favorite: FavoriteRestaurantIdb,
        restaurant,
    });
};
export { testFactories };