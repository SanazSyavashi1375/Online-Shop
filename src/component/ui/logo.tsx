import logo from '../../assets/image/logo.jpg';
import { memo } from 'react';
const Logo = () => {
  return (
    <div>
      <img alt="logo" src={logo} className="w-52 " />
    </div>
  );
};
export default memo(Logo);
