import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import product from '../../models/product';
import { memo } from 'react';
const CardRow: React.FC<{
  item: product;
  addItem?: any;
  removeItem?: any;
  number: number;
  deleteItem?: any;
}> = (props) => {
  return (
    <div className={props.number % 2 === 0 ? 'bg-white w-full h-12' : 'bg-header w-full h-12'}>
      <div className=" flex flex-row flex-wrap w-full text-center  h-full items-center  px-10 ">
        <p id="number" className="w-1/8">
          {props.number}
        </p>
        {props.item.title.trim().length < 15 ? (
          <p id="title" className="w-1/8">
            {props.item.title}
          </p>
        ) : (
          <p id="title" className="w-1/8">
            {props.item.title.substring(0, 15)}
          </p>
        )}
        {props.item.description.trim().length < 20 ? (
          <p id="description" className="w-3/12">
            {props.item.description}
          </p>
        ) : (
          <p id="description" className="w-3/12">
            {props.item.description.substring(0, 20)}
          </p>
        )}
        <div className="w-1/8 flex flex-row  text-start items-end content-center justify-end justify-items-end pl-7">
          <div className="w-4/12 h-full ">
            <button
              onClick={() => props.removeItem(props.item)}
              className="w-2 h-2 p-2.5  rounded-full bg-redButton text-white text-center flex items-center justify-center  ring-offset-2 ring-2 ring-redButton ">
              -
            </button>
          </div>
          <div className="w-4/12 h-full">
            <p id="quantity">{props.item.quantity}</p>
          </div>
          <div className="w-4/12 h-full">
            <button
              onClick={() => props.addItem(props.item)}
              className="   w-2 h-2 p-2.5 rounded-full bg-buttonBlue text-white text-center flex items-center justify-center  ring-offset-2 ring-2 ring-buttonBlue">
              +
            </button>
          </div>
        </div>
        <p id="price" className="w-1/8">
          {props.item.price}$
        </p>
        <p id="totalPrice" className="w-1/8">
          {props.item.totalPrice}$
        </p>
        <DeleteOutlineIcon
          className="bg-redButton w-1/12 rounded-full text-white"
          onClick={() => props.deleteItem(props.item)}
        />
      </div>
    </div>
  );
};
export default memo(CardRow);
