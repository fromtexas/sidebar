import React from 'react';
import OptionContainer from '../containers/OptionContainer';


const OptionsList = ({options, checkedStatus}) => {
  //console.log('rendered');
  return options.map(item => <OptionContainer status={checkedStatus} key={item.id} {...item} /> );
};

export default OptionsList;
