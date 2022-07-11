import SearchTab from '../ui/searchTab';
import SelectedPart from '../ui/selectionPart';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/productSlice';
import { useCallback } from 'react';
import { sectionActions } from '../../store/selectPart';
import { memo } from 'react';
import { useState } from 'react';
const SearchPart = () => {
  const [selectedCategory, setSelectedCategory] = useState('none');
  const [serchedInput, setSearchedInput] = useState('');
  const dispatch = useDispatch();
  const searchInputHandler = useCallback(
    (e: React.FormEvent | any) => {
      dispatch(productActions.searchProduct({ serchedInput: e.target.value, selectedCategory }));
      setSearchedInput(e.target.value);
    },
    [dispatch, selectedCategory]
  );
  const selectedHandler = useCallback(
    (e: React.FormEvent | any) => {
      setSelectedCategory(e.target.value);
      // dispatch(productActions.changeCartWithCategory(e.target.value));
      dispatch(productActions.searchProduct({ serchedInput, selectedCategory: e.target.value }));
    },
    [dispatch, serchedInput]
  );
  return (
    <div className="flex  mb-0  w-full pt-5  flex-col    sm:flex-row pl-2   lg:flex-row mx-0 ml-10/6 pl-2 bg-white">
      <SearchTab searchInputHandler={searchInputHandler} />
      <SelectedPart selectedHandler={selectedHandler} />
    </div>
  );
};
export default memo(SearchPart);
