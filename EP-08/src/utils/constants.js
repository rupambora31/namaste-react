// Named-Export
export const CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const LOGO_URL =
  'https://img.freepik.com/premium-vector/healthy-food-logo_476121-102.jpg';

export const MENU_API =
  'https://corsproxy.org/?' +
  encodeURIComponent(
    'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1157917&lng=91.7085933&restaurantId='
  );

export const RESTAURANT_LIST_API =
  'https://corsproxy.org/?' +
  encodeURIComponent(
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  );
