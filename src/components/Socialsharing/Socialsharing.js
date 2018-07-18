import React, { Component } from 'react';
import s from './Socialsharing.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  ViberShareButton,
  EmailShareButton,
} from 'react-share';

class Socialsharing extends Component {
  render() {
    // let url = "http://localhost:3000/search";

    const url = 'https://timesofindia.indiatimes.com';
    return (
      <div>
        <FacebookShareButton className={s.fb} url={url}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook-m.png" />
        </FacebookShareButton>
        <GooglePlusShareButton className={s.gp} url={url}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-google-m.png" />
        </GooglePlusShareButton>
        <WhatsappShareButton url={url} className={s.wa}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/whatsapp.svg"
            width="28"
            height="28"
          />
        </WhatsappShareButton>
      </div>
    );
  }
}
export default withStyles(s)(Socialsharing);
