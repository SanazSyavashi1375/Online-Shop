import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import product from '../../models/product';
import CardRow from '../ui/cardRow';
import Header from '../layout/header';
import Profile from './profile';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { cardAction } from '../../store/card';
import { memo, useCallback, useMemo } from 'react';
const ShoppingCartPage = () => {
  const user = useSelector((state: any) => state.user.user1);
  const items = useSelector((state: any) => state.card.items);
  const totalPrice = useSelector((state: any) => state.card.totalPrice);
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
          <div className="flex flex-row flex-wrap h-12  items-center bg-cardHeader text-center  px-10 w-full ">
            <p className="w-1/8">number</p>
            <p className="w-1/8">Title</p>
            <p className="w-3/12">description</p>
            <p className="w-1/8">Quantity</p>
            <p className="w-1/8">price</p>
            <p className="w-1/8">Total price</p>
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
        <div className="flex flex-row flex-wrap h-12  items-center   text-center mt-2 px-10 w-full ">
          <p className="w-1/8 ">Total</p>
          <p className="w-1/8 pl-5/8 ">{totalPrice}$</p>
        </div>
      </div>
      <Link to="/productsPage" className="text-header flex flex-row-reverse  ">
        Back
        <ArrowBackIcon />
      </Link>
    </div>
  );
};
export default memo(ShoppingCartPage);
