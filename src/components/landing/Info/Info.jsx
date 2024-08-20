import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? 'https://www.youtube.com/embed/blzO72BYxj8?si=SiYjgE7EUP2YxXcL'
    : '';
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
          style={{ backgroundImage: `url('/assets/img/subscribe-img-decor-sm.png')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <img
                src='/assets/img/about.jpg'
                className='js-img'
                alt=''
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>Check This Out</span>
              <h2>Our Biggest Discount of the Year</h2>
              <span className='info-blocks__item-descr'>
              Celebrate your every trip with our quality and stylish travel bags
              </span>
              <p>
              If you are excited about your upcoming trip, make this journey more compatible with our travel bag. We are offering you the biggest discount of the year, which makes your bag-purchasing decisions from our site easier. Every individual bag piece manufactured at Soplapha is engineered and designed that set you completely apart. Get yours Today. 
              </p>
              <Link href='/about'>
                <a className='btn'>
                  Explore now
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className='info-blocks__item info-blocks__item-reverse js-img'
          style={{ backgroundImage: `url('/assets/img/main-text-decor.png')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <PromoVideo
                videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image='/assets/img/about2.jpg'
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>What Makes Us Different </h2>
              {/* <span className='info-blocks__item-descr'>
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span> */}
              <p>
              Make your trip the most convenient and exemplary with our travel baggage. With the belief of making travel simple and easy for every person, we manufacture our bags. Now you can travel worry-free and in style with our most functional travel bags. Explore our wide range of travel bag categories. Now grab your bag and explore the most comfortable journey.
              </p>
              <Link href='/about'>
                <a className='info-blocks__item-link'>
                  <i className='icon-video'></i>
                  Watch video about us
                  <i className='icon-arrow-lg'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
