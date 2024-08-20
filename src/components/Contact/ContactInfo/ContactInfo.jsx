import socialData from 'data/social';

export const ContactInfo = () => {
  const footerSocial = [...socialData];
  return (
    <>
      {/* <!-- BEGIN CONTACTS INFO --> */}
      <div className='contacts-info'>
        <div className='wrapper'>
          <div className='contacts-info__content'>
            <div className='contacts-info__text'>
              <h4>We take care of you</h4>
              <p>
              At Soplapha, we are proud to make high-quality travel bags customized for the modern traveler. Durable, practical, and stylish companions for all kinds of travel, our bags will accompany each journey. Made only from superior raw materials, our creations ensure extraordinary strength and water resistance that will pass the test of time. We emphasize well-designed construction, including multiple compartments, ergonomic straps, and security features. We are committed to sustainability and source all our materials from eco-friendly suppliers, and ethical manufacturing processes. Our luggage is designed for comfort and style on your business, adventure, or leisure journeys. If you need more information or any other information, please do not hesitate to contact us on our page; we are always ready to help with all your travel needs.
              </p>
            </div>
            <div className='contacts-info__social'>
              <span>Find us here:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACTS INFO EOF   -->  */}
    </>
  );
};
