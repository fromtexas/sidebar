import React from 'react';
import {connect} from 'react-redux';
import {search} from '../utils/getProducts';
import {getAll} from '../actions/getActions';

const Search = ({dispatch}) => {
  const onSearch = (e) => {
    search(e.target.value).then((res) => {
      dispatch(getAll(res));
    });
  };
  return (
    <div className="form-group search">
      <input onChange={onSearch} placeholder="Поиск по продуктам" className="form-control" type="text"/>
    </div>
  );
};

export default connect()(Search);
