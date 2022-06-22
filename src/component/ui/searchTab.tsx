import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { memo } from 'react';

const SearchTab: React.FC<{ searchInputHandler: any }> = (props) => {
  return (
    <div className="w-card flex flex-row ">
      <input
        type="text"
        className="w-full relative border-solid border-2 border-search rounded-xl"
        onChange={props.searchInputHandler}
      />
      <SearchIcon className="absolute inset-x-6 top-110 text-search" />
    </div>
  );
};
export default memo(SearchTab);
