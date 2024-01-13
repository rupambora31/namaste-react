import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) => card?.card?.card?.itemCards
    )?.card?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="m-5 p-5">
      <h1 className="font-semibold text-4xl pb-2 ">{name}</h1>
      <p className="font-medium pb-4 text-xl text-blue-600">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2 className="font-semibold text-xl">Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{' ₹'}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
