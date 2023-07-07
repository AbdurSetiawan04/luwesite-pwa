import RestaurantDBSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { restoDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="main-container">
          <h2 class="title-container">Resto Detail</h2>
          <section id="detail-resto"></section>
          </div>
        </div>
      </div>
      <div id="likeButton"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = await RestaurantDBSource.Detail(url.id);
    const maincontainer = document.querySelector('#main-container', '#detail-resto');

    maincontainer.innerHTML = restoDetail(container);

    LikeButtonInitiator.init({
      likebuttoncontainer: document.querySelector('#likeButton'),
      restaurant: {
        id: container.id,
        name: container.name,
        city: container.city,
        rating: container.rating,
        description: container.description,
        pictureId: container.pictureId,
      },
    });
  },
};

export default Detail;
