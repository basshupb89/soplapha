import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text'>Professional</span>
            <h1 className='main-text'>Stay <span>Trendy</span> <br/> with Our Bags</h1>
            <p>
            Travel wild and travel free with our durable and stylish travel bags, ready to help you get packed.
            </p>

            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
        <div className="ban-overlay"></div>
        
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
