import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { memo } from 'react';
const CardButton: React.FC<{ totalItem: number }> = (props) => {
  return (
    <Link
      to="/shoppingCartPage"
      className="flex flex-row text-center items-center content-center px-5 rounded-3xl hover:bg-stone-400">
      <p className="mr-1">Cart</p>
      <Avatar
        sx={{
          backgroundColor: '#e25141',
          height: '20px',
          width: '20px',
          fontSize: '14px'
        }}>
        {props.totalItem}
      </Avatar>
    </Link>
  );
};
export default memo(CardButton);
