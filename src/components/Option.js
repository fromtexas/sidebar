import React from 'react';

const Option = ({name, st, change}) => {
  //console.log('rendered');
  return (
    <li>
      <label className="form-check-label menu-options">
        <input checked={st} onClick={change}  type="checkbox" className="form-check-input"/>
          {name}
      </label>
    </li>
  );
};

export default Option;
