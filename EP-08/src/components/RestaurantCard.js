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
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <div style={{ fontWeight: '600' }}>
        ⭐ {avgRating} • <span>{deliveryTime} mins</span>
      </div>
      <p>{costForTwo}</p>
      <p>{cuisines.join(', ')}</p>
    </div>
  );
};

export default RestaurantCard;
