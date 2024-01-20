import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = (item) => {
    // Dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-3xl font-bold pb-4">Cart</h1>
      <div className="lg:w-6/12 m-auto flex flex-col">
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="p-3">Your cart is empty! Let's browse some food...</h1>
        )}
        {cartItems.length > 0 && (
          <button
            className="p-2 pt-4 m-2 text-blue-700 font-medium cursor-pointer flex justify-end"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
