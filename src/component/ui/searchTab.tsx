import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { memo } from 'react';

const SearchTab: React.FC<{ searchInputHandler: any }> = (props) => {
  return (
    <div className="flex flex-row w-11/12 sm:w-45/100 ml-0 mr-5/100 pl-2 md:w-45/100 ml-0 mr-5/100 pl-2 lg:w-card ml-0 mr-10/6  pl-0 ">
      <input
        type="text"
        className="w-full relative border-solid border-2 border-search rounded-xl"
        onChange={props.searchInputHandler}
      />
      <SearchIcon className="absolute  text-search top-160 inset-x-8 sm: inset-x-14 lg: inset-x-8" />
    </div>
  );
};
export default memo(SearchTab);
