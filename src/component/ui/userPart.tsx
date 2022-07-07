import { Avatar } from '@mui/material';
import avatarImg from '../../assets/image/avatar.jpg';
import React from 'react';
import { memo } from 'react';
const UserPart: React.FC<{ name: string; showProfile: any }> = (props) => {
  return (
    <button
      className="flex flex-row h-full text-center items-center content-center px-5 rounded-3xl hover:bg-stone-400 "
      onClick={props.showProfile}>
      <Avatar src={avatarImg} />
      <p className="h-full text-gray-500 ml-3 text-2vw lg:text-1vw ">Hi, {props.name}</p>
    </button>
  );
};
export default memo(UserPart);
