export const ContactFrom = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-contacts js-img'
        style={{ backgroundImage: `url('/assets/img/blog-img1.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>write to us</span>
            <span className='main-text'>leave a message</span>
            <p>
            Feel free to give us feedback regarding our products and we will come up with relevant solutions if you have any type of problem. 
            </p>
            <form>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your name'
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter your email'
                />
              </div>
              <div className='box-field box-field__textarea'>
                <textarea
                  className='form-control'
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <button type='submit' className='btn'>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
