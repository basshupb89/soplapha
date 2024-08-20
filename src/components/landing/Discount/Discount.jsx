import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Discount</span>
            <span className='main-text'>
              Get Your <span>60%</span> Off
            </span>
            <p>
            Travel wild and travel free with our durable and stylish travel bags, ready to help you get packed.
            </p>

            <Link href='/shop'>
              <a className='btn'>get now!</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
