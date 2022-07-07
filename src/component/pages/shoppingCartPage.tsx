import { useSelector } from 'react-redux';
import product from '../../models/product';
import CardRow from '../ui/cardRow';
import Header from '../layout/header';
import Profile from './profile';
import { useDispatch } from 'react-redux';
import { cardAction } from '../../store/card';
import { memo, useCallback, useMemo } from 'react';
const ShoppingCartPage = () => {
  const user = useSelector((state: any) => state.user.user1);
  const items = JSON.parse(localStorage.getItem('shopCardItem') || '[]'.trim());
  const totalPrice = Number(useSelector((state: any) => state.card.totalPrice).toFixed(2));
  const dispatch = useDispatch();
  const addItem = useCallback(
    (item: product) => {
      dispatch(cardAction.addItem(item));
    },
    [dispatch]
  );
  const removeItem = useCallback(
    (item: product) => {
      dispatch(cardAction.removeItem(item.id));
    },
    [dispatch]
  );
  const deleteItem = useCallback(
    (item: product) => {
      dispatch(cardAction.deleteItem(item.id));
    },
    [dispatch]
  );
  const name = useSelector((state: any) => state.user.user1.username);
  const username = useMemo(() => name, [name]);
  const user1 = useMemo(() => user, [user]);
  return (
    <div className="flex flex-col w-full p-0 ">
      <Profile user={user1} />
      <Header name={username} />
      <div className="w-full border-solid border-2 border-black mt-10">
        <div className="w-full ">
          <div className="flex flex-row flex-wrap h-12  items-center bg-cardHeader text-center   w-full text-3vw sm:text-2vw lg:text-1vw ">
            <p className="w-1/12 text-white  sm:w-1/12  lg:w-1/12 ">number</p>
            <p className="w-4/12 text-white    lg:w-2/12 ">Title</p>
            <p className="hidden text-white  lg:inline-block w-4/12 ">description</p>
            <p className="w-2/12 text-white   ">Quantity</p>
            <p className="w-2/12 text-white   lg:w-1/12 ">price</p>
            <p className="w-2/12 text-white  lg:w-1/12 ">Total price</p>
          </div>
          {items.map((item: product, index: number) => (
            <CardRow
              key={index}
              item={item}
              number={index + 1}
              addItem={() => addItem(item)}
              removeItem={() => removeItem(item)}
              deleteItem={() => deleteItem(item)}
            />
          ))}
        </div>
        <div className="flex flex-row flex-wrap h-12  items-center   text-center  w-full text-3vw sm:text-2vw lg:text-1vw ">
          <p className="w-1/12  ">Total</p>
          <p className="w-1/8 pl-5/12 lg:pl-8/12 ">{totalPrice}$</p>
        </div>
      </div>
    </div>
  );
};
export default memo(ShoppingCartPage);
