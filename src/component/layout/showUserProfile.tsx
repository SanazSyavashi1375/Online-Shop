import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../../assets/css/userProfile.css';
import user from '../../models/user';
import UserProfile from '../ui/userProfile';
import { memo } from 'react';
const BackDrop: React.FC<{ onClick: any }> = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};
const ModalOverlay: React.FC<{ user: user }> = (props) => {
  return (
    <div className="modal">
      <UserProfile user={props.user} />
    </div>
  );
};
const ProfileModule: React.FC<{ onClose: any; user: user }> = (props) => {
  const portal: HTMLElement | Element | DocumentFragment | null | any =
    document.getElementById('profile');
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.onClose} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay user={props.user} />, portal)}
    </Fragment>
  );
};
export default memo(ProfileModule);
