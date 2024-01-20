import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(only once)
  // if dependency array is [btnName] => called every-time btnName is updated.
  useEffect(() => {}, [btnName]);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex items-center justify-between bg-blue-50 shadow-md m-2 ">
      <div className="pl-5 ">
        <h1 className="font-black text-blue-700 text-4xl pb-3">tomato</h1>
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
          <li className="px-4">
            <Link to="/cart">
              Cart{' '}
              <span className="text-white p-1 px-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                {cartItems.length}
              </span>
            </Link>
          </li>

          <li
            className="px-4"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </li>
          <li className="px-4">{onlineStatus ? '🟢' : '🔴'}</li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
