import React from 'react';
import './splash.scss';
import checklist from '../../images/icons/checklist.svg';
import food from '../../images/icons/food.svg';
import cookbook from '../../images/icons/cookbook.svg';

class SplashPage extends React.Component {

  render() {
    return (
      <>
        <div className='video-hero'>
          <video poster="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FSplash%2Fbrand-hero-poster.jpg" 
                  preload="auto" 
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  className="vsc-initialized" 
                  data-vscid="3rbb7xa52">
            <source src="https://media.blueapron.com/home_page/Splash/brand-hero.mp4" type="video/mp4" />
          </video>

          <div className='hero-text'>
            <h2 className='splash-title'>Make the most with what you have.</h2>
          </div>

          <a href='#/signup' className='get-started-button'>
            GET STARTED
          </a>
        </div>


        <br />

      <div className='main-description'>
        <span className='heading'>Hungry? Digifridge it.</span>

        <div className='summary-perks'>
            <div id='stock' className='perk'>
              <img src={checklist} alt='no image' />
              <br />
              <strong>Keep stock of what's in your fridge.</strong>
              <br />
              <br />
              This will be your digital record of your stock!
            </div>

            <div id='combos' className='perk'>
              <img src={food} alt='no image' />
              <br />
              <strong>Try out wild food combos on the fly.</strong>
              <br />
              <br />
              Milk + Chicken? Beets + Harissa? Bamboo + Shrimp? You can try it all with our recipe recommender!
            </div>

            <div id='faves' className='perk'>
              <img src={cookbook} alt='no image' />
              <br />
              <strong>Save favorites to your recipe book.</strong>
              <br />
              <br />
              Collect your favorites all in one place!
            </div>
        </div>
      </div>

    </>



      
    );
  }
}

export default SplashPage;