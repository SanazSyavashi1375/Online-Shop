import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
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
      <div className=" flex flex-row flex-wrap w-full text-center  h-full items-center  text-2vw sm:text-2vw md:text-1vw lg:text-1vw ">
        <p id="number" className="w-1/12  lg:w-1/12 ">
          {props.number}
        </p>
        {props.item.title.trim().length < 15 ? (
          <p id="title" className="w-4/12  lg:w-2/12 ">
            {props.item.title}
          </p>
        ) : (
          <p id="title" className="w-4/12  lg:w-2/12 ">
            {props.item.title.substring(0, 15)}
          </p>
        )}
        {props.item.description.trim().length < 20 ? (
          <p id="description" className="hidden  lg:inline-block w-4/12">
            {props.item.description}
          </p>
        ) : (
          <p id="description" className="hidden  lg:inline-block w-4/12">
            {props.item.description.substring(0, 20)}
          </p>
        )}
        <div className=" flex flex-row  text-center items-center content-center justify-center justify-items-center pl-7 w-2/12  lg:w-2/12 ">
          <div className="w-4/12 h-full ">
            <button
              onClick={() => props.removeItem(props.item)}
              // className="w-2 h-2 p-2.5  rounded-full bg-redButton hover:bg-red-600  text-center flex items-center justify-center  ring-offset-2 ring-2 ring-redButton ">
            >
              <RemoveCircleIcon sx={{ color: '#f44236' }} />
            </button>
          </div>
          <div className="w-4/12 h-full">
            <p id="quantity">{props.item.quantity}</p>
          </div>
          <div className="w-4/12 h-full">
            <button
              onClick={() => props.addItem(props.item)}
              // className="   w-2 h-2 p-2.5 rounded-full bg-buttonBlue hover:bg-sky-600  text-center flex items-center justify-center  ring-offset-2 ring-2 ring-buttonBlue"
            >
              <AddCircleIcon sx={{ color: '#2c6dc1' }} />
            </button>
          </div>
        </div>
        <p id="price" className="w-2/12  lg:w-1/12 ">
          {props.item.price}$
        </p>
        <p id="totalPrice" className="w-2/12   lg:w-1/12 ">
          {props.item.totalPrice}$
        </p>
        <DeleteOutlineIcon
          className="bg-redButton  rounded-full text-white   w-2/12   lg:w-2/12  hover:bg-red-600"
          onClick={() => props.deleteItem(props.item)}
        />
      </div>
    </div>
  );
};
export default memo(CardRow);
