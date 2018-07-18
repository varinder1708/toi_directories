import React, { Component } from 'react';
import s from './Searchwrapper.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Searchbar from '../../components/Searchbarstaticdata/Searchbar';
import Citieslistinput from '../../components/Citieslistinput/Citieslistinput';

class Searchwrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={s['search-wrapper']}>
        <form onSubmit={this.searchCategory}>
          <ul className={s.clearfix}>
            <li>
              {/* <input type="text" ></input> */}
              <Citieslistinput
                val={this.state.location}
                onselectvalue={this.setLocation}
              />
              <i className={s.carrot} />
            </li>
            <li>
              <i className={s.carrot}>
                {/* <input type="text"/> */}
                <Searchbar
                  onselectvalue={this.setCategory}
                  val={this.state.category}
                />
              </i>
            </li>
            <li>
              <button value="Search" className={s.btn} />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
export default withStyles(s)(Searchwrapper);
