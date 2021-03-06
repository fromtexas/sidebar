import React, {Component} from 'react';
import Sidemenu from './Sidemenu';


class Product extends Component {
  render () {
    const {showFun, showStatus, hideFun, background, icon} = this.props;
    const renderMenu = () => {
        if (!showStatus){
          return;
        }
        return <Sidemenu hideMenu={hideFun} />;
      };
      return (
        <li style={{backgroundColor: background}} onClick={showFun} className="product">
          Продукты
          <span className="caret">ВСЕ <i className={`fa ${icon}`}></i></span>
          {renderMenu()}
        </li>
      );
  }
}

export default Product;
