import React from 'react';
import product from '../../models/product';
import { memo } from 'react';
const Cart: React.FC<{
  product: product;
  key?: number | undefined;
  addItem: any;
}> = (props) => {
  return (
    <div className="box-border w-card  border-solid border border-gray-100 shadow-xl my-5 mx-10/6 h-1/3">
      <img className="w-full h-80 " alt="product" src={props.product.image} />
      <div className="box-border m-5 mb-3 h-35 ">
        {props.product.title.trim().length < 30 ? (
          <p id="title" className="text-2xl leading-9">
            {props.product.title}
          </p>
        ) : (
          <p id="title" className="text-2xl leading-9">
            {props.product.title.substring(0, 30)}..
          </p>
        )}
        {props.product.description.trim().length < 40 ? (
          <p id="description " className="leading-9 w-full text-clip overflow-hidden  indent-8">
            {props.product.description}
          </p>
        ) : (
          <p id="description " className="leading-9 w-full text-clip overflow-hidden  indent-8">
            {props.product.description.substring(0, 40)}...
          </p>
        )}
        <div className="flex flex-row justify-between">
          <p id="price" className="text-sm">
            price {props.product.price} $
          </p>
          <button
            className="bg-buttonBlue px-4 py-1 text-sm text-white"
            onClick={() => props.addItem(props.product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Cart);
