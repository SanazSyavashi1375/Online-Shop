import CardContainer from '../layout/cartContainer';
import Header from '../layout/header';
import SearchPart from '../layout/searchPart';
import TopHeader from '../layout/topHeader';
import Profile from './profile';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../ui/notifications';
import fetchProductData from '../../store/productActions';
import fetchUserData from '../../store/userAction';
import { AppDispatch, RootState } from '../../store';
import { memo } from 'react';
const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.ui.notification);
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  const productArr = useSelector((state: RootState) => state.productSlice.searchedArr);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const user = useSelector((state: RootState) => state.user.user1);
  const name = useSelector((state: RootState) => state.user.user1.username);
  const productArray = useMemo(() => productArr, [productArr]);
  const username = useMemo(() => name, [name]);
  const user1 = useMemo(() => user, [user]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <TopHeader />
      <Header name={username} />
      <SearchPart />
      <CardContainer productArr={productArray} />
      <Profile user={user1} />
    </>
  );
};

export default memo(ProductsPage);
