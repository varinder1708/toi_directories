import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Displayproperty.css';

class Displayproperty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divStyle = {
      'font-size': '14px',
    };
    const divStylee = {
      'font-size': '11px',
    };
    return (
      <div>
        <p style={divStyle}>
          <strong>{this.props.obj.title}</strong>
        </p>
        <p style={divStylee}>
          <strong>Rating: {this.props.obj.avg_rating}</strong>
        </p>
        <p style={divStylee}>
          {/* <strong >Address: {this.props.obj.full_address}</strong> */}
          <div
            dangerouslySetInnerHTML={{ __html: this.props.obj.full_address }}
          />
        </p>
        <p style={divStylee}>
          <strong>Category: {this.props.obj.Category}</strong>
        </p>
      </div>
    );
  }
}

export default withStyles(s)(Displayproperty);
