import favRestaurantIdb from '../../data/restaurant-idb';
import restaurantCard from '../templates/restaurant-card';

const FavoriteCard = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Favorite Restaurant</h2>

        <section id="fav-restaurant"></section>
      </div>
    `;
  },

  async afterRender() {
    const data = await favRestaurantIdb.getAllRestaurant();

    const favRestaurantContainer = document.querySelector('#fav-restaurant');

    if (data.length === 0) {
      favRestaurantContainer.innerHTML = `
        Tidak ada restaurant favorite. Silahkan tambahkan di halaman detail restaurant.
      `;
    }

    data.forEach((restaurant) => {
      favRestaurantContainer.innerHTML += restaurantCard(restaurant);
    });
  },
};

export default FavoriteCard;
