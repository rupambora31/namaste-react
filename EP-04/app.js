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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
