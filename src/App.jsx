import React from 'react';
import Followers from './Followers';
import Header from './Header';
import Overview from './Overview';

const App = () => {
  return (
    <>
      <div className="bg-v-dark-blue relative pt-10 pl-5 pr-5 pb-10 md:pl-32 md:pr-32 md:pt-5 md:h-screen">
        <div className="z-50">
          <Header />
        </div>
        <div className='mb-10'>
          <Followers />
        </div>
        <div>
          <Overview />
        </div>
        {/* <div className="h-40 bg-v-dark-blue-top absolute top-0 left-0 right-0 rounded-bl-3xl rounded-br-3xl z-0"></div> */}
      </div>
    </>
  );
};

export default App;
