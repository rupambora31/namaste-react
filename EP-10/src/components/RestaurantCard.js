import { CDN_URL } from '../utils/constants'; //named-import

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200"
      
    >
      <img
        className="rounded-lg"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-2xl py-2">{name}</h2>
      <div className="font-medium pb-2">
        ⭐ {avgRating} • <span>{deliveryTime} mins</span>
      </div>
      <p className="font-medium">{costForTwo}</p>
      <p>{cuisines.join(', ')}</p>
    </div>
  );
};

export default RestaurantCard;
