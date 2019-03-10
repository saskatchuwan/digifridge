import React from 'react';
import './splash.scss';

class SplashPage extends React.Component {

  render() {
    return (
      <div className='splash-main'>
      
        <div className='video-hero'>
          <video poster="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FSplash%2Fbrand-hero-poster.jpg" preload="auto" autoplay="true" loop='true' muted="true" class="vsc-initialized" data-vscid="3rbb7xa52">
            <source src="https://media.blueapron.com/home_page/Splash/brand-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div classname='hero-text'>
            <h1>Hungry? Digifridgit.</h1>
            {/* <h2>Make the most with what you have.</h2> */}
        </div>

      </div>
    );
  }
}

export default SplashPage;