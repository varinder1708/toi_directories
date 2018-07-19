import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.css';
// import styles from './Home.css';
import Searchbar from '../../components/Searchbarstaticdata/Searchbar';
import Citieslistinput from '../../components/Citieslistinput/Citieslistinput';
import * as queryString from 'query-string';
import axios from 'axios';
import Displayrecords from '../../components/Displayrecords/Displayrecords';
import Displayproperty from '../../components/Displayproperty/Displayproperty';
import Socialsharing from '../../components/Socialsharing/Socialsharing';
import Searchwrapper from '../../components/Searchwrapper/Searchwrapper';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: 'listview',
      location: '',
      category: '',
      details: {},
      count: 0,
      input_location: '',
      input_category: '',
    };
    // this.loadstatefromparams();
  }
  // loadstatefromparams = () => {
  //   let params_query;
  //   if (this.props.location.search == "") {
  //     params_query = { category: "", location: "" };
  //   } else {
  //     params_query = queryString.parse(this.props.location.search);
  //   }
  //   this.state = { ...params_query, data: [] };
  // };
  // componentWillMount() {
  //   if (this.state.category != "") {
  //     axios
  //       .get(
  //         "http://cls.timesofindia.indiatimes.com/index.php?fn=cData&categoryName=" +
  //           this.state.category
  //       )
  //       .then(response => {
  //         this.setState({ data: response.data });
  //       });
  //   }

  showDetail = id => {
  
    // window.history.pushState(null,"", "/detail");
    axios
      .get(
        `http://cls.timesofindia.indiatimes.com/index.php?fn=lData&_id=${id}`,
      )
      .then(response => {
        this.setState({ details: response.data[0] });
        this.setState({ view: 'detail' });
      });

    // window.history.pushState(null,"", "/search?id="+id+"location="+this.state.location+"&category="+this.state.category);
  };
  searchCategory = event => {
    event.preventDefault();
    // if (this.state.category != "") {
    axios
      .get(
        `http://cls.timesofindia.indiatimes.com/index.php?fn=cData&categoryName=${
          this.state.input_category
        }`,
      )
      .then(response => {
        this.setState({ category: this.state.input_category });
        this.setState({ location: this.state.input_location });
        this.setState({ count: response.data.length });
        this.setState({ data: response.data });
        this.setState({ view: 'listview' });
      });
    // }
    //  window.history.pushState(null,"", "/search?location="+this.state.location+"&category="+this.state.category);
    // window.location =
    //   "/search?location=" +
    //   this.state.location +
    //   "&category=" +
    //   this.state.category;
  };
  setLocation = loc => {
    this.setState({ input_location: loc });
  };
  setCategory = cat => {
    this.setState({ input_category: cat });
  };
  componentDidMount() {
    // document.body.addEventListener('click', ()=>{return}, true);
    // this.searchCategory()
  }
  render() {
    let detailText = '';
    let listRecords = '';
    let headertext = '';

    if (this.state.count > 0) {
      headertext = (
        <h6>
          <strong>{this.state.count} results</strong> for {this.state.category}{' '}
          near {this.state.location}
        </h6>
      );
    }
    if (this.state.view == 'detail') {
      detailText = (
        <div className="details">
          <Displayproperty obj={this.state.details} />
          <Socialsharing />
        </div>
      );
    }
    if (this.state.view == 'listview') {
      listRecords = (
        <Displayrecords
          onselectdetail={this.showDetail}
          records={this.state.data}
        />
      );
    }

    return (
      //   <div className={s.page}>
      //     <div className={s.container}>
      //       <form onSubmit={this.searchCategory}>

      //           <Citieslistinput
      //             val={this.state.location}
      //             onselectvalue={this.setLocation}
      //           />

      //           <Searchbar
      //             onselectvalue={this.setCategory}
      //             val={this.state.category}
      //           />

      //         <input type="submit" className={s.search} val="Search" />
      //       </form>
      //     </div>

      //     {detailText}

      //     {listRecords}
      //   </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      <div className={`${s['wrapper-directory']} ${s.clearfix}`}>
      <div className={s['search-wrapper']}>
      <form onSubmit={this.searchCategory}>
        <ul className={s.clearfix}>
          <li className={s.searchcontent}>
          <Citieslistinput
                  val={this.state.location}
                  onselectvalue={this.setLocation}
                />
            <i className={s.carrot} />
          </li>
          <li className={s.location}>
          <i className={s.icon}></i>
              
          <Searchbar
                    onselectvalue={this.setCategory}
                    val={this.state.category}
                  />
          </li>
          <li className={s.form_submit}>
            <button className={s.btn} />
          </li>
        </ul>
        </form>
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

 {headertext}

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
        {listRecords}
        {detailText}
        {/* <div className={s['rhs-results']}>
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
        </div> */}
      </div>
    </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    //  <div className={`${s['wrapper-directory']} ${s.clearfix}`}>
    //     <div className={s['search-wrapper']}>
    //       <form onSubmit={this.searchCategory}>
    //         <ul className={s.clearfix}>
    //           <li>
              
    //             <Citieslistinput
    //               val={this.state.location}
    //               onselectvalue={this.setLocation}
    //             />
    //             <i className={s.carrot} />
    //           </li>
    //           <li>
    //             <i className={s.carrot}>
                  
    //               <Searchbar
    //                 onselectvalue={this.setCategory}
    //                 val={this.state.category}
    //               />
    //             </i>
    //           </li>
    //           <li>
    //             <button value="Search" className={s.btn} />
    //           </li>
    //         </ul>
    //       </form>
    //     </div>;
    //     <div className={`${s.wrapper} ${s['directory-content']}`}>
    //       <h2>Beauty and Wellness</h2>
    //       <p>
    //         Beauty Pack is a Focused Show on Beauty Packaging which is the
    //         Concurrent to the Beauty & Spa Expo provides a Global Platform for
    //         the Beauty Packaging Companies to meet the Indian
    //         Manufactures.Private Label on Beauty Products is another focussed
    //         segments to make the brands meet the contract manufactuers for the
    //         latest innovation of the products. India Beauty & Spa Expo is All
    //         Geared up for Boosting your Beauty Business in the Burgeoning/
    //         Growing Indian Beauty Market.
    //       </p>
    //     </div>
    //     {headertext}
    //     <div className={`${s.wrapper} ${s['directory-content']}`}>
    //       <div className={s['lhs-filter']}>
    //         <h2>Filter by</h2>
    //         <div className={s['filter-box']}>
    //           <h3>
    //             Category<i />
    //           </h3>
    //           <ul>
    //             <li>
    //               <input type="checkbox" />
    //               <label>Courts</label>
    //             </li>
    //             <li>
    //               <input type="checkbox" />
    //               <label>Courts</label>
    //             </li>
    //           </ul>
    //           <span className={s.more}>+25 more</span>
    //         </div>
    //         <div className={s['filter-box']}>
    //           <h3>
    //             Category<i />
    //           </h3>
    //           <ul>
    //             <li>
    //               <input type="checkbox" />
    //               <label>Courts</label>
    //             </li>
    //             <li>
    //               <input type="checkbox" />
    //               <label>Courts</label>
    //             </li>
    //           </ul>
    //           <span className={s.more}>+25 more</span>
    //         </div>
    //         <div className={s['filter-box']}>
    //           <h3>
    //             Category<i />
    //           </h3>
    //           <ul>
    //             <li>
    //               <input type="checkbox" />
    //               <label>Courts</label>
    //             </li>
    //             <li>
    //               <input type="checkbox" />
    //               <label>Courts</label>
    //             </li>
    //           </ul>
    //           <span className={s.more}>+25 more</span>
    //         </div>
    //       </div>

    //       {listRecords}
    //     </div>
    //   </div>
    );
  }
}

export default withStyles(s)(Search);
