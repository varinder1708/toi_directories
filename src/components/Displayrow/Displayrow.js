import React, { Component } from 'react';
import s from './Displayrow.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Displayrow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //   <div className={s.row}>

      //     <div onClick={()=>{this.props.onselectdetail(this.props.val._id.$oid)}}><strong>{this.props.val.title}</strong></div>

      //     <div>Rating: {this.props.val.avg_rating}</div>

      //  <div>{this.props.val.Category}</div>
      //   </div>

      <li className={s.clearfix}>
        <div className={s.column11}>
          <h4>{this.props.val.title}</h4>
          <span className={s.rating}>0 Reviews</span>
          <p>Beauty Parlours, Spa & Saloons</p>
        </div>
        <div className={s.column11}>
          <h5>+91 9810000000</h5>
          <span className={s.address}>Banjara Hills Bangalore - 129999</span>
        </div>
        <div className={s['result-status']}>
          <span className={s.open}>Open</span>
          - untill 7:00PM
        </div>
        <div className={s['result-footer']}>
          <div className={s.socials}>
            <a href="#" className={s.fb} />
            <a href="#" className={s.tw} />
            <a href="#" className={s.msg} />
          </div>
          <div className={s.direction}>Directions</div>
        </div>
      </li>
    );
  }
}

export default withStyles(s)(Displayrow);
