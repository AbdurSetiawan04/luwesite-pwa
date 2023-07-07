const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
    I.amOnPage('/#/favorite');
    I.wait(5);
});
Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('.favcontent');
    I.see('No Favorite Restaurant Yet', '#restaurantcatalogue');
});
Scenario('liking one restaurant', async ({ I }) => {
    I.see('No Favorite Restaurant Yet', '#restaurantcatalogue');
    I.amOnPage('/');
    I.seeElement('.list_item_title');
  const restoTitleElm = locate('.list_item_title').first();
  const restoTitle = await I.grabTextFrom(restoTitleElm);
    I.click(restoTitleElm);
    I.wait(5);
    I.seeElement('.likee');
    I.click('.likee');
    I.amOnPage('/#/favorite');
    I.wait(5);
    I.seeElement('.list_item_title');
  const favoriteRestaurantElm = locate('.list_item_title').first();
  const favoriteRestaurant = await I.grabTextFrom(favoriteRestaurantElm);
  assert.strictEqual(restoTitle, favoriteRestaurant);
});
Scenario('unliking one restaurant', async ({ I }) => {
    I.see('No Favorite Restaurant Yet', '#restaurantcatalogue');
    I.amOnPage('/');
    I.seeElement('.list_item_title');
    
  const restoTitleElm = locate('.list_item_title').first();
    I.click(restoTitleElm);
    I.wait(5);
    I.seeElement('.likee');
    I.click('.likee');
    I.amOnPage('/#/favorite');
    I.wait(5);
    I.seeElement('.list_item_title');

  const favoriteRestaurantElm = locate('.list_item_title').first();
    I.click(favoriteRestaurantElm);
    I.wait(5);
    I.seeElement('.unlike');
    I.click('.unlike');
    I.amOnPage('/#/favorite');
    I.wait(5);
    I.dontSeeElement('.list_item_title');
});