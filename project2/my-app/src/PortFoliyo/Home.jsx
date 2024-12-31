import React from 'react';
import img1 from './images/IMG_20210514_124459.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='intro'>
        <h1>
          Hello!<br />
          I'm PAYAL PATEL<br />
          A Frontend Developer<br />
        </h1>
      </div>
      <div className='image-container'>
        <img src={img1} alt="Payal Patel" className='profile-image'/>
      </div>
    </div>
  );
};

export default Home;
