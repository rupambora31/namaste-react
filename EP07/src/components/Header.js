import { LOGO_URL } from '../utils/constants'; //named-import
import { useState, useEffect } from 'react';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(only once)
  // if dependency array is [btnName] => called every-time btnName is updated.
  useEffect(() => {
    console.log('useEffect called!');
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
