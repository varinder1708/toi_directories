import React, { Component } from 'react';
import DisplayRow from '../Displayrow/Displayrow';
import s from './Displayrecords.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Displayrecords extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s['rhs-results']}>
        <ul className={s.list}>
          {this.props.records.map((item, i) => (
            <li className={s.clearfix}>
              <div className={s.column11}>
                <h4
                  onClick={id => {
                    this.props.onselectdetail(item._id.$oid);
                  }}
                >
                  {item.title}
                </h4>
                <span className={s.rating}>{item.avg_rating} Reviews</span>
                <p>{item.category}</p>
              </div>
              <div className={s.column11}>
                <h5>+91 9810000000</h5>
                <span className={s.address}>{item.full_address}</span>
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

            // <DisplayRow
            //   onselectdetail={this.props.onselectdetail}
            //   key={i}
            //   val={item}
            // />
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Displayrecords);
