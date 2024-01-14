import { LOGO_URL } from '../utils/constants'; //named-import
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(only once)
  // if dependency array is [btnName] => called every-time btnName is updated.
  useEffect(() => {}, [btnName]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between bg-blue-50 shadow-md m-2 ">
      <div className="pl-5 ">
        {/* <img className="w-36" src={LOGO_URL} /> */}
        <h1 className="font-black text-blue-700 text-4xl pb-3">potato</h1>
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4 font-medium">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>

          <button
            className="px-4"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{onlineStatus ? '🟢' : '🔴'}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
