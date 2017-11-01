import React, {Component} from 'react';
import {connect} from 'react-redux';
import {recieveAll} from '../actions/getActions';
import OptionsList from '../components/OptionsList';
import GeminiScrollbar from 'react-gemini-scrollbar';

class OptionsContainer extends Component {
  constructor () {
    super();
    this.state = {
      checkAll: false
    }
  }
  componentDidMount () {
    this.props.dispatch(recieveAll());
  }

  change () {
    this.setState({
      checkAll: !this.state.checkAll
    });
  }

  render () {
    return (
      <div>
        <label className="form-check-label check-all">
          <input onChange={this.change.bind(this)} type="checkbox" checked={this.state.checkAll} className="form-check-input"/>
            Все
        </label>
        <GeminiScrollbar>
          <OptionsList checkedStatus={this.state.checkAll} options={this.props.options}/>
        </GeminiScrollbar>
      </div>
    );
  }
}


const mapStateToProps = ({options}) => ({
  options
});



export default connect(mapStateToProps)(OptionsContainer);
