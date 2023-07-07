import RestaurantDBSource from '../../data/restaurantdb-source';
import { template } from '../templates/template-creator';

const Home = {

  async render() {
    return `
                <div class="hero-image">
                <div class="hero-inner">
                    <h1 class="hero-title">Luwe Site</h1>
                    <p class="hero-sub__title">Find your favorite place to eat!</p>
                </div>
            </div>
            <div class="main">
            </div>            
            `;
  },

  async afterRender() {
    const data = await RestaurantDBSource.Home();
    const datas = data.restaurants;
    const list = document.querySelector('.main');

    datas.forEach((restoran) => {
      list.innerHTML += template(restoran);
    });
  },
};

export default Home;
