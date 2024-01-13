import RestaurantCard, { aggregatedDiscount } from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { RESTAURANT_LIST_API } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
  // Local-state-Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  const RestaurantDiscount = aggregatedDiscount(RestaurantCard);
  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log('body-rendered!', filteredRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  // dynamic way to fetch the data without explicitly specifying the index.
  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_API);

      const json = await data.json();

      let listOfRestaurant = null;

      if (json?.data?.cards) {
        // The .some() method in JavaScript is a way to iterate over an array. It tests whether at least one element in the array passes the test implemented by the provided function. It stops iterating once such an element is found and returns true, otherwise, it returns false.
        json.data.cards.some((card) => {
          const restaurants =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurants) {
            listOfRestaurant = restaurants;
            return true; // Stop the iteration once found
          }
        });
      }

      setListOfRestaurant(listOfRestaurant);
      setFilteredRestaurant(listOfRestaurant);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline! Please check your internet</h1>;
  }

  // Conditional-Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4 ">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="px-4 py-0.5 border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-blue-100 m-4 rounded-md hover:bg-blue-200"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-blue-100 rounded-md hover:bg-blue-200"
            onClick={() => {
              // filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
              console.log(listOfRestaurants);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={'/restaurants/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantDiscount resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
