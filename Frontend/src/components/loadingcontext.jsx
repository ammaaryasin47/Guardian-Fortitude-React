import React, { createContext, useState, useContext, useEffect } from 'react';
import DissolveNetPreloader from '../components/neuralpreloader';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);

  // Function to trigger the tactical loader
  const triggerLoading = () => {
    setIsLoading(true);
    setActive(true);
  };

  const finishLoading = () => {
    setIsLoading(false);
    // Give the dissolve animation time to finish before unmounting
    setTimeout(() => setActive(false), 1000); 
  };

  return (
    <LoadingContext.Provider value={{ triggerLoading, finishLoading }}>
      {active && <DissolveNetPreloader onFinished={() => {}} isEnding={!isLoading} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);