import React from 'react';
import ReactDOM from 'react-dom/client';

/*
 * Header
 *    -Logo
 *    -Nav items
 * Body
 *    -Search
 *    -RestaurantContainer
 *      -RestaurantCard
 *        -Img
 *        -Name, Rating, Cuisine, ETA, Price
 * Footer
 *    -Copyright
 *    -Links
 *    -Address
 *    -Contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-102.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="restaurant logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rzfjjqd53rek0rgot0zd"
      />
      <h2>JBs</h2>
      <div style={{fontWeight:"600"}}>⭐ 4.5  •  <span>43 mins</span></div>
      <p>Sweets, North Indian, South Indian</p>
      
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
