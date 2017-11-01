import React, {Component} from 'react';
import Product from '../components/Product';


class ProductContainer extends Component {
  constructor () {
    super();
    this.state = {
      display:false,
      targetBackground: '',
      caret: 'fa-caret-right'
    };
  }

  showMenu () {
    this.setState({
      display: true,
      targetBackground: '#262626',
      caret: 'fa-caret-left'
    });
  }

  hideMenu () {
    this.setState({
      display: false,
      targetBackground: '',
      caret: 'fa-caret-right'
    });
  }

  render () {
    return <Product icon={this.state.caret} background={this.state.targetBackground} showStatus={this.state.display} hideFun={this.hideMenu.bind(this)} showFun={this.showMenu.bind(this)}/>;
  }
}

export default ProductContainer;
