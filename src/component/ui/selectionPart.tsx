import React from 'react';
import { memo } from 'react';
const SelectedPart: React.FC<{ selectedHandler: any }> = (props) => {
  return (
    <div className="w-11/12  sm:w-45/100 mx-5/100 pl-5 md:w-45/100 mx-5/100 pl-5 lg:w-card mx-10/6  pl-5">
      <select name="category" id="category " className="w-full " onChange={props.selectedHandler}>
        <option value="none">Category</option>
        <option value="electronics">electronic</option>
        <option value="jewelery">jewelry</option>
        <option value="men's clothing">mens clothing</option>
        <option value="women's clothing">women sClothing</option>
      </select>
      <hr className="text-black" />
    </div>
  );
};
export default memo(SelectedPart);
