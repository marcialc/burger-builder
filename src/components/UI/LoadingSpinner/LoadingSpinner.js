import React from 'react';
import Lottie from 'react-lottie';
import animationData from './LoadingSpinner.json';

const LoadingSpinner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
}

export default LoadingSpinner;