import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content xs:w-[300px] flex-col lg:flex-row-reverse">
          <img
            src="https://ehonami.blob.core.windows.net/media/2016/02/ditch-this-man-zapper-to-increase-virility-800x600.jpg"
            className="lg:max-w-sm xs:max:w-xs rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
