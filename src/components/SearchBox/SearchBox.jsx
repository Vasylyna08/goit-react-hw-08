import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <span className={css.searchTitle}>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
export default SearchBox;
