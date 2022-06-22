import React from 'react';
import { memo } from 'react';
const SelectedPart: React.FC<{ selectedHandler: any }> = (props) => {
  return (
    <div className="w-card ml-16">
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
