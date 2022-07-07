import Cart from '../ui/cart';
import React, { useMemo } from 'react';
import { memo } from 'react';
import product from '../../models/product';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { cardAction } from '../../store/card';
import { StatusAction } from '../../store/statusNotification';
const CardContainer: React.FC<{ productArr: product[] }> = (props) => {
  const dispatch = useDispatch();
  const addItem = useCallback(
    (product: product) => {
      dispatch(cardAction.addItem(product));
      dispatch(StatusAction.showNotification(product.title));
      setTimeout(() => {
        dispatch(StatusAction.hideNotification());
      }, 1000);
    },
    [dispatch]
  );
  const resultArr = useMemo(() => {
    return props.productArr.map((item: product) => (
      <Cart product={item} key={item.id} addItem={addItem} />
    ));
  }, [props.productArr, addItem]);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center mt-36">{resultArr}</div>
  );
};
export default memo(CardContainer);
