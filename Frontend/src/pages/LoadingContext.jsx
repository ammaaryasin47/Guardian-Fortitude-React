import React, { createContext, useState, useContext, useEffect } from 'react';
import DissolveNetPreloader from '../components/neuralpreloader';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); // Controls the "isEnding" animation state
  const [active, setActive] = useState(false);      // Controls if component is in DOM

  // Call this to start the preloader
  const triggerLoading = () => {
    setActive(true);
    setIsLoading(true);
  };

  // Call this to start the dissolve/fade-out
  const finishLoading = () => {
    setIsLoading(false);
    // Wait for the 1s CSS transition to finish before removing from DOM
    setTimeout(() => {
      setActive(false);
    }, 1000); 
  };

  return (
    <LoadingContext.Provider value={{ triggerLoading, finishLoading }}>
      {/* We pass isEnding={!isLoading} so that when isLoading is false, 
         the Preloader knows to play its "dissolve" animation.
      */}
      {active && (
        <DissolveNetPreloader 
          onFinished={() => {}} 
          isEnding={!isLoading} 
        />
      )}
      
      {/* This wrapper ensures the website content fades in 
         smoothly as the preloader fades out 
      */}
      <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};