import React, {Component} from 'react';
import {connect} from 'react-redux';
import {recieveAll, getAll} from '../actions/getActions';
import OptionsList from '../components/OptionsList';
import GeminiScrollbar from 'react-gemini-scrollbar';

class OptionsContainer extends Component {
  constructor () {
    super();
    this.state = {
      checkAll: false,
      offset: 0,
      limit: 100,
      showOptions:[],
      top: 0,
      bottom: 0
    };
  }
  componentWillMount () {
    this.props.dispatch(recieveAll());
  }
  componentWillReceiveProps () {
    this.setState((prevState, props)=>{
      return {
        showOptions: props.options.slice(0,100)
      };
    });
  }
  componentWillUnount () {
    this.props.dispatch(getAll([]))
  }

  infinite (e) {
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= (target.scrollHeight-3)) {
      console.log('load');
      this.setState({
        offset: this.state.offset + 100,
        limit: this.state.limit + 100
      }, () => (this.loadMore(target, true)));
    }
    if (this.state.offset &&  target.scrollTop === 0) {
      console.log('return');
      this.setState({
        offset: this.state.offset - 100,
        limit: this.state.limit - 100
      }, () => (this.loadMore(target, false)));
    }
  }
  loadMore (target, or) {
    this.setState({
        showOptions: this.props.options.slice(this.state.offset, this.state.limit)
      },
    () => { or ? target.scrollTop = 15 : target.scrollTop = target.scrollHeight - 333  }
    );
  }
  change () {
    this.setState({
      checkAll: !this.state.checkAll
    });
  }

  render () {
    const loading = () => {
      if (!this.state.showOptions.length) {
        return <p style={{color: '#fff', position: 'absolute', textAlign: 'center', width: '100%'}}>Loading...</p>;
      }
    };
    return (
      <ul onScroll={this.infinite.bind(this)} className="list-unstyled products-check">
        <label className="form-check-label check-all">
          <input onChange={this.change.bind(this)} type="checkbox" checked={this.state.checkAll} className="form-check-input"/>
            Все
        </label>
        {loading()}
        <GeminiScrollbar>
          <OptionsList checkedStatus={this.state.checkAll} options={this.state.showOptions}/>
        </GeminiScrollbar>
      </ul>
    );
  }
}


const mapStateToProps = ({options}) => ({
  options
});



export default connect(mapStateToProps)(OptionsContainer);
