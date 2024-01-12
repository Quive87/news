import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your Tailwind CSS styles


const TypingAnimation = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const originalContent = "This is an article about the likelihood of the BJP retaining power in the 2024 Lok Sabha elections. It discusses the results of recent state elections and how they indicate support for the BJP. The article also mentions that Fitch Ratings expects the BJP to win. Some experts believe that a BJP victory would be positive for policy continuity and long-term growth. Overall, the article suggests that the BJP is well-positioned to win the next general election.";
    const words = originalContent.split(' ');
    let currentIndex = 0;

    const loadingInterval = setInterval(() => {
      setIsLoading(false);
      clearInterval(loadingInterval);
    }, getRandomTime()); // Simulate fake loading for 3, 5, or 7 seconds

    const typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        setContent((prevContent) => words.slice(0, currentIndex + 1).join(' '));
        currentIndex += 1;
      }
    }, 500); // Adjust the interval for typing speed

    return () => clearInterval(typingInterval);
  }, []);

  const getRandomTime = () => {
    const times = [3000, 5000, 7000];
    return times[Math.floor(Math.random() * times.length)];
  };

  return (
    <div className="p-4 relative">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <p class="text-gray-500" className={`text-gray-500 text-sm font-medium ${'typing-animate'}`}>{content}</p>
      )}
    </div>
  );
};

export default TypingAnimation;
