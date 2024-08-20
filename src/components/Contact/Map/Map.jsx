export const Map = () => {
  return (
    <div className='contacts-map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3690.8378289237758!2d114.16853617529311!3d22.321972179670972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE5JzE5LjEiTiAxMTTCsDEwJzE2LjAiRQ!5e0!3m2!1sen!2sin!4v1723819271757!5m2!1sen!2sin'
        width='100%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </div>
  );
};
