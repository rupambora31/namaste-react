import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {
  // Local-state-Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log('body-rendered!');

  useEffect(() => {
    fetchData();
  }, []);

  // dynamic way to fetch the data without explicitly specifying the index.
  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const json = await data.json();

      console.log(json);

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

  // Conditional-Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={'/restaurants/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
