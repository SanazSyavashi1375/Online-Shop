import React from 'react';
import user from '../../models/user';
import { Avatar } from '@mui/material';
import avatarImg from '../../assets/image/avatar.jpg';
import { memo } from 'react';
const UserProfile: React.FC<{ user: user }> = (props) => {
  return (
    <div className="flex flex-col border border-indigo-600 w-full p-6 border-search shadow-lg">
      <div className="flex flex-row  items-center">
        <Avatar src={avatarImg} />
        <p>{props.user.username}</p>
      </div>
      <p>
        {props.user.name.firstname}
        {props.user.name.lastname}
      </p>
      <p>Email : {props.user.email}</p>
      <p>phone Number : {props.user.phone}</p>
    </div>
  );
};
export default memo(UserProfile);
