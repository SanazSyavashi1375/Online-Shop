import { Circle } from '@mui/icons-material';
import { memo } from 'react';
const TopHeader = () => {
  return (
    <div className="bg-topHeader flex flex-row  justify-self-start py-1">
      <div className="flex flex-row  justify-between w-3/5   px-1.5 h-full text-center items-center content-center ">
        <div className="flex flex-row item-center justtify-start">
          <Circle sx={{ color: '#666666', height: '14px' }} />
          <Circle sx={{ color: '#666666', height: '14px' }} />
          <Circle sx={{ color: '#666666', height: '14px' }} />
        </div>
        <div>
          <p className="text-white text-xs w-fit pr-0  sm:w-52 pr-6 ">Site Title</p>
        </div>
      </div>
    </div>
  );
};
export default memo(TopHeader);
