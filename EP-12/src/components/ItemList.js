import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 py-8 m-2 border-b-2 text-left flex w-full"
        >
          <div className="w-9/12 pr-3">
            <div>
              <span className="font-semibold text-lg">
                {item.card.info.name}
              </span>
              <p className="text-md pb-2 font-medium text-blue-700">
                {' '}
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="text-xs text-slate-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 flex flex-col items-center">
            <div className="absolute ">
              <button className="p-1 px-6  text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-md shadow-lg mt-24">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-md h-28 w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
