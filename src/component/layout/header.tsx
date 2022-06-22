import React, { useCallback, useMemo } from 'react';
import CardButton from '../ui/cardButton';
import Logo from '../ui/logo';
import UserPart from '../ui/userPart';
import { useDispatch } from 'react-redux';
import { profileAction } from '../../store/profile';
import { useSelector } from 'react-redux';
import { memo } from 'react';
const Header: React.FC<{ name: string | any }> = (props) => {
  const dispatch = useDispatch();
  const showProfile = useCallback(() => {
    dispatch(profileAction.showProfile());
  }, [dispatch]);
  const totalItem = useSelector((state: any) => state.card.totalItem);
  const totItem = useMemo(() => totalItem, [totalItem]);
  return (
    <div className="bg-gray-300 flex flex-row text-center items-center content-center py-1 justify-between px-5 bg-header overflow-hidden mt-0">
      <UserPart name={props.name} showProfile={showProfile} />
      <Logo />
      <CardButton totalItem={totItem} />
    </div>
  );
};
export default memo(Header);
