import CardContainer from '../layout/cartContainer';
import Header from '../layout/header';
import SearchPart from '../layout/searchPart';
import Profile from './profile';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../ui/notifications';
import fetchProductData from '../../store/productActions';
import fetchUserData from '../../store/userAction';
import { AppDispatch, RootState } from '../../store';
import { memo } from 'react';
import StatusNotification from '../ui/statusNotification';
const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
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
  const status = useSelector((state: RootState) => state.status.statusIsShown);
  const productTitle = useSelector((state: RootState) => state.status.title);
  const notification = useSelector((state: RootState) => state.ui.notification);

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <Header name={username} />
        {status && <StatusNotification title={productTitle} />}
        <SearchPart />
      </div>
      <CardContainer productArr={productArray} />
      <Profile user={user1} />
    </>
  );
};

export default memo(ProductsPage);
