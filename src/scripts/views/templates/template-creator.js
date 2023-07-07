import CONFIG from '../../globals/config';

const template = (data) => `
<div class="list_item">
<img class="lazyload list_item_thumb" data-src="${CONFIG.BASE_PIC.small + data.pictureId}" alt="${CONFIG.BASE_PIC.small}" title="${CONFIG.BASE_PIC.small}">
<div class="city">${data.city}</div>
<div class="list_item_content">
    <p class="list_item_rating">
        Rating : 
        <span href="#" class="list_item_rating_value">${data.rating}</span>
    </p>
    <h1 class="list_item_title"><a href="#/detail/${data.id}">${data.name}</a></h1>
    <div class="list_item_desc">${data.description.slice(0, 200)}...</div>
</div>
</div>
`;

const restoDetail = (resto) => `
  <div class="detail">
    <div class="img-container">
        <img class="lazyload detail-img" alt="${resto.name}" data-src="${CONFIG.BASE_PIC.small + resto.pictureId}"/>
    </div>

    <ul class="detail-info">
      <li>
        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.name}</p>
        </li>

      <li>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.address}, ${resto.city}</p>
        </li>

      <li>
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <p class="detail-name-address-rating">${resto.rating}</p>
      </li>

      <li><p class="detail-desc">${resto.description}</p></li>

      <li>${resto.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>
          `,
    )
    .join('')}
      </li>
    </ul>

    <h3>Menu :</h3>

    <div class="detail-menu">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${resto.menus.foods
    .map(
      (food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>
              `,
    )
    .join('')}
        <ul>
      </div>

      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${resto.menus.drinks
    .map(
      (drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
              `,
    )
    .join('')}
        <ul>
      </div>
    </div>

    <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${resto.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
    </div>
  </div>
`;

const Like = () => `
  <button aria-label="like this movie" id="likeButton" class="like likee">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const Unlike = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like unlike">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  template, restoDetail, Like, Unlike,
};
