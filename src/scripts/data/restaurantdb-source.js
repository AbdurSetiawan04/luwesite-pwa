import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDBSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.Home);
    const responseJson = await response.json();
    return responseJson;
  }

  static async Detail(id) {
    const response = await fetch(API_ENDPOINT.Detail(id));
    const a = await response.json();
    return a.restaurant;
  }

  static async Review(Review) {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(API_ENDPOINT.Review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(Review),
    });
    // eslint-disable-next-line no-use-before-define
    const responseJson = await responseJson();
    return responseJson.customerReviews;
  }
}

export default RestaurantDBSource;
