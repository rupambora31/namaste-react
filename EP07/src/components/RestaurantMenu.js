import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  //   setting a default value (an empty object {}) for the destructuring assignment
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  // .find() method is applied to the cards array, attempting to find the first element that satisfies the provided condition.
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) => card?.card?.card?.itemCards
    )?.card?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
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
