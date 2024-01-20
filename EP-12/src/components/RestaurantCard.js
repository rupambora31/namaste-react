import { useContext } from 'react';
import { CDN_URL } from '../utils/constants'; //named-import
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[350px] h-[430px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-[350px] h-[200px]"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-2xl py-4">{name}</h2>
      <div className="font-medium pb-2">
        ⭐ {avgRating} • <span>{deliveryTime} mins</span>
      </div>
      <p className="font-medium">{costForTwo}</p>
      <p>{cuisines.join(', ')}</p>
      <p>User: {loggedInUser}</p>
    </div>
  );
};

// Higher-order component
// I/P = Restaurant card => O/P = RestaurantCardPromoted

export const aggregatedDiscount = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const {
      aggregatedDiscountInfoV3: { header, subHeader },
    } = resData?.info;
    return (
      <div>
        <label className="absolute font-bold bg-gradient-to-r from-cyan-500 to-blue-500  text-white m-4 p-1 px-4 mt-44 ml-8 rounded-r-md">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
