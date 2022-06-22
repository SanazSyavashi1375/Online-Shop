import SearchTab from '../ui/searchTab';
import SelectedPart from '../ui/selectionPart';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/productSlice';
import { useCallback } from 'react';
import { sectionActions } from '../../store/selectPart';
import { memo } from 'react';
const SearchPart = () => {
  const dispatch = useDispatch();
  const searchInputHandler = useCallback(
    (e: React.FormEvent | any) => {
      dispatch(productActions.searchProduct(e.target.value));
    },
    [dispatch]
  );
  const selectedHandler = useCallback(
    (e: React.FormEvent | any) => {
      dispatch(sectionActions.setSelected(e.target.value));
      dispatch(productActions.changeCartWithCategory(e.target.value));
    },
    [dispatch]
  );
  return (
    <div className="flex flex-row m-5 mb-0 ">
      <SearchTab searchInputHandler={searchInputHandler} />
      <SelectedPart selectedHandler={selectedHandler} />
    </div>
  );
};
export default memo(SearchPart);