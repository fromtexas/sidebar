import React, {Component} from 'react';
import Option from '../components/Option';

class OptionContainer extends Component {
  constructor () {
    super();
    this.state = {
      stPersonal: false
    };
  }
  change () {
    this.setState({
      stPersonal: !this.state.stPersonal
    });
  }
  componentDidMount () {
    this.setState({
      stPersonal: this.props.status
    })
  }

  componentWillReceiveProps () {
    this.setState((prevState, props)=>{
      return {
        stPersonal:props.status
      };
    });
  }
  render () {
    return <Option change={this.change.bind(this)} st={this.state.stPersonal} {...this.props} />;
  }
}

export default OptionContainer;
