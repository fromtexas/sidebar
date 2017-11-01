import React from 'react';
import OptionsContainer from '../containers/OptionsContainer';
import Search from './Search';


const Sidemenu = ({hideMenu}) => {
  return (
    <div onMouseLeave={hideMenu} className="sidemenu">
      <Search/>
      <ul className="list-unstyled products-check">

          <OptionsContainer/>

      </ul>
      <button className="btn">ПРИМЕНИТЬ</button>
    </div>
  );
};

export default Sidemenu;
