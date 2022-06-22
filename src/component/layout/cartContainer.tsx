import Cart from '../ui/cart';
import React, { useMemo } from 'react';
import { memo } from 'react';
import product from '../../models/product';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { cardAction } from '../../store/card';
const CardContainer: React.FC<{ productArr: product[] }> = (props) => {
  const dispatch = useDispatch();
  const addItem = useCallback(
    (product: product) => {
      dispatch(cardAction.addItem(product));
    },
    [dispatch]
  );
  const resultArr = useMemo(() => {
    return props.productArr.map((item: product) => (
      <Cart product={item} key={item.id} addItem={addItem} />
    ));
  }, [props.productArr, addItem]);

  return <div className="flex flex-row flex-wrap">{resultArr}</div>;
};
export default memo(CardContainer);
