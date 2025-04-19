import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-info">
          <img
            className="capturne-photoroom-1-icon"
            loading="lazy"
            alt="Placeholder"
            src="./image/Capture12.PNG"
          />
        </div>
        <div className="about">
          <div className="about1">About</div>
          <div className="how-it-works-container">
            <span>
              <p className="how-it-works">How it works</p>
              <p className="blank-line3">&nbsp;</p>
              <p className="featured">Featured</p>
              <p className="blank-line4">&nbsp;</p>
              <p className="partnership">Partnership</p>
              <p className="blank-line5">&nbsp;</p>
              <p className="business-relation">Business Relation</p>
            </span>
          </div>
        </div>
        <div className="socials">
          <div className="socials1">Socials</div>
          <div className="discord-instagram-twitter-container">
            <span className="discord-instagram-twitter-container1">
              <p className="discord">Discord</p>
              <p className="blank-line6">&nbsp;</p>
              <p className="instagram">Instagram</p>
              <p className="blank-line7">&nbsp;</p>
              <p className="twitter">Twitter</p>
              <p className="blank-line8">&nbsp;</p>
              <p className="facebook">Facebook</p>
            </span>
          </div>
        </div>
        <div className="community">
          <div className="community1">Community</div>
          <div className="events-blog-podcast-container">
            <span>
              <p className="events">Events</p>
              <p className="blank-line9">&nbsp;</p>
              <p className="blog">Blog</p>
              <p className="blank-line10">&nbsp;</p>
              <p className="podcast">Podcast</p>
              <p className="blank-line11">&nbsp;</p>
              <p className="invite-a-friend">Invite a friend</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
