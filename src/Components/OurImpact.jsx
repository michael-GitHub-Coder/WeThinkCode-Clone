import React from 'react'
import { useEffect,useState } from 'react';
const OurImpact = () => {

  const CounterUp = ({ target }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const speed = 200;
      const increment = target / speed;
  
      const updateCount = () => {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          if (newCount < target) {
            return Math.ceil(newCount);
          } else {
            clearInterval(interval);
            return target;
          }
        });
      };
  
      const interval = setInterval(updateCount, 1);
  
      return () => clearInterval(interval);
    }, [target]);
  
    return <div className="text-3xl font-bold mt-10 flex">{count}</div>;
  };
  return (
    <div className="bg-blue-500 h-[400px] mt-10">
        <h1 className="text-white font-semibold text-3xl text-center pt-8">Our Impact</h1>

        <div className="container mx-auto max-w-4xl grid grid-cols-4">
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
            
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
          <div className="flex justify-center">
            <CounterUp target={80} className="text-yellow-600 "/>
          </div>
        
        </div>
    </div>
  )
}

export default OurImpact