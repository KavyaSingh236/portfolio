"use client";

import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath, width, play }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      const lottieInstance = lottieRef.current;

      if (play) {
        lottieInstance.goToAndStop(0, true); // Go to the start of the animation
        lottieInstance.play(); // Play the animation
      }
    }
  }, [play]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationPath}
      loop
      style={{ width: width || '95%' }}
    />
  );
};

export default AnimationLottie;
