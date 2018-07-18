/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Html.css';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={`${s['wrapper-directory']} ${s.clearfix}`}>
        <div className={s['search-wrapper']}>
          <ul className={s.clearfix}>
            <li>
              <input type="text" />
              <i className={s.carrot} />
            </li>
            <li>
              <i className={s.carrot}>
                <input type="text" />
              </i>
            </li>
            <li>
              <button className={s.btn} />
            </li>
          </ul>
        </div>

        <div className={`${s.wrapper} ${s['directory-content']}`}>
          <h2>Beauty and Wellness</h2>
          <p>
            Beauty Pack is a Focused Show on Beauty Packaging which is the
            Concurrent to the Beauty & Spa Expo provides a Global Platform for
            the Beauty Packaging Companies to meet the Indian
            Manufactures.Private Label on Beauty Products is another focussed
            segments to make the brands meet the contract manufactuers for the
            latest innovation of the products. India Beauty & Spa Expo is All
            Geared up for Boosting your Beauty Business in the Burgeoning/
            Growing Indian Beauty Market.
          </p>
        </div>

        <h6>
          <strong>465 results</strong> for Beauty and Wellness near Bangalore
        </h6>

        <div className={`${s.wrapper} ${s['directory-content']}`}>
          <div className={s['lhs-filter']}>
            <h2>Filter by</h2>
            <div className={s['filter-box']}>
              <h3>
                Category<i />
              </h3>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label>Courts</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Courts</label>
                </li>
              </ul>
              <span className={s.more}>+25 more</span>
            </div>
            <div className={s['filter-box']}>
              <h3>
                Category<i />
              </h3>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label>Courts</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Courts</label>
                </li>
              </ul>
              <span className={s.more}>+25 more</span>
            </div>
            <div className={s['filter-box']}>
              <h3>
                Category<i />
              </h3>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label>Courts</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Courts</label>
                </li>
              </ul>
              <span className={s.more}>+25 more</span>
            </div>
          </div>

          <div className={s['rhs-results']}>
            <ul className={s.list}>
              <li className={s.clearfix}>
                <div className={s.column11}>
                  <h4>Pundalik Spa</h4>
                  <span className={s.rating}>0 Reviews</span>
                  <p>Beauty Parlours, Spa & Saloons</p>
                </div>
                <div className={s.column11}>
                  <h5>+91 9810000000</h5>
                  <span className={s.address}>
                    Banjara Hills Bangalore - 129999
                  </span>
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
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Html);
