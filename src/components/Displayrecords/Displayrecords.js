import React, { Component } from 'react';
import DisplayRow from '../Displayrow/Displayrow';
import s from './Displayrecords.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Displayrecords extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      // <div className={s['rhs-results']}>
      //   <ul className={s.list}>
      //     {this.props.records.map((item, i) => (
            <DisplayRow
              onselectdetail={this.props.onselectdetail}
              // key={i}
              // val={item}
            />
      //     ))}
      //   </ul>
      // </div>
    );
  }
}

export default withStyles(s)(Displayrecords);
