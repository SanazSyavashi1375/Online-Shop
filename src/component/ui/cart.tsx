import React from 'react';
import product from '../../models/product';
import { memo } from 'react';
const Cart: React.FC<{
  product: product;
  key?: number | undefined;
  addItem: any;
}> = (props) => {
  return (
    <div className="box-border  border-solid border border-gray-100 shadow-xl flex flex-wrap px-2 my-5  h-1/3 w-11/12 mx-5/100 sm:w-45/100 mx-5/100  md:w-45/100 mx-5/100 lg:w-card mx-10/6  ">
      <div className="  w-full h-80 flex justify-center items-center content-center ">
        <div className=" w-52 h-80  overflow-hidden flex justify-center items-center content-center">
          <img className="object-cover " alt="product" src={props.product.image} />
        </div>
      </div>
      <div className="box-border mt-5 mb-3 h-35 w-full px-3 ">
        {props.product.title.trim().length < 20 ? (
          <p id="title" className=" leading-9  text-4vw sm:text-3vw lg:text-2vw">
            {props.product.title}
          </p>
        ) : (
          <p id="title" className=" leading-9  text-4vw sm:text-3vw  lg:text-2vw">
            {props.product.title.substring(0, 20)}..
          </p>
        )}

        {props.product.description.trim().length < 30 ? (
          <p
            id="description "
            className="leading-9 w-full text-clip overflow-hidden mt-5  indent-8 text-3vw sm:text-2vw  lg:text-1vw">
            {props.product.description}
          </p>
        ) : (
          <p
            id="description "
            className="leading-9 w-full text-clip overflow-hidden mt-5 indent-8 text-3vw sm:text-2vw lg:text-1vw">
            {props.product.description.substring(0, 30)}...
          </p>
        )}
        <div className="flex flex-row w-full justify-between mt-5">
          <p id="price" className="text-sm">
            price {props.product.price} $
          </p>
          <button
            className="bg-buttonBlue px-4 py-1 text-sm text-white hover:bg-sky-600"
            onClick={() => props.addItem(props.product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Cart);
