import logo from '../../assets/image/logo.jpg';
import { memo } from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to="/productsPage">
      <img alt="logo" src={logo} className="w-52 h-12 rounded-lg" />
    </Link>
  );
};
export default memo(Logo);
