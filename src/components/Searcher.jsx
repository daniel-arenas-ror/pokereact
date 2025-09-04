import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(setSearchTerm(value.toLowerCase()));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value.toLowerCase()));
  };
  
  return (
    <Input.Search 
      placeholder="Buscar Pokemon..." 
      onSearch={handleSearch}
      onChange={handleChange}
      allowClear
    />
  );
}

export default Searcher;
