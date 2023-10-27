import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className='main'>
      <div className='sub-main'>
        <nav>
        <h1>Our Pricing</h1>
        <p>Save 20% on a yearly plan.</p>
        <Button onToggle={handleToggle}/>
        <div className='box1 hover-effect'><button className='buttons'>GET STARTED</button>
            <h1 className='money'><span className='black'>$</span>{isYearly ? 0 : 0}</h1>
            <p  className='p1'>per month</p>
            <h2 className='smallhead'>Free Forever</h2>
            <p  className='p2'>Your free landing page</p>
        </div>
        <div className='box2 hover-effect'><button className='buttons'>GET STARTED</button>
            <h1 className='money'><span className='black'>$</span>{isYearly ? 7 : 9}</h1>
            <p>per month, excl. TAX</p>
            <h2 className='smallhead'>Personal</h2>
            <p className='p2'>Your own website</p>
        </div>
        <div className='box3 hover-effect'><button className='buttons'>GET STARTED</button>
            <h1 className='money'><span className='black'>$</span>{isYearly ? 15 : 19}</h1>
            <p>per month, excl. TAX</p>
            <h2 className='smallhead'>Business</h2>
            <p className='p2'>Product & service catalog</p>
        </div>
        <div className='box4 hover-effect'><button className='buttons'>GET STARTED</button>
             <h1 className='money'><span className='black'>$</span>{isYearly ? 31 : 39}</h1>
             <p>per month, excl. TAX</p>
             <h2 className='smallhead'>Commerce</h2>
             <p className='p2'>Sell online</p>
        </div>
        </nav>
        <div>
          <h2>Need help choosing a plan? Discover our <span className='blue'>feature matrix</span></h2>
        </div>
        
      </div>

    </div>
  );
}

export default App;