import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import User from '../../models/user';
import { profileAction } from '../../store/profile';
import ProfileModule from '../layout/showUserProfile';
import { memo } from 'react';
const Profile: React.FC<{ user: User }> = (props) => {
  const dispatch = useDispatch();
  const hideProfileHandler = useCallback(() => {
    dispatch(profileAction.hideProfile());
  }, [dispatch]);
  const profileIsShown = useSelector((state: any) => state.profile.profileIsShown);
  return <>{profileIsShown && <ProfileModule user={props.user} onClose={hideProfileHandler} />}</>;
};
export default memo(Profile);
