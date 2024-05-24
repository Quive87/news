import Navigation from "../components/Navigation";
import React from 'react';
import '../components/Home.css'

const Home = () => {
  const ada3LogoUrl = 'https://quive87.github.io/gg/pro/adapare.png';
  const exhibitionLogoUrl = 'https://www.dpsranchi.com/img/logo.png';

  return (
    <>
    <Navigation />
    <div className="container mx-auto mt-8">
      <div className="bg-gray-800 p-8 rounded-lg bg-transparent">
        <div className="flex justify-center items-center mb-6">
          {/* Apply a custom class for larger Ada3 logo */}
          <img
  src={ada3LogoUrl}
  alt="Ada3 Logo"
  className="h-12 w-13 ada3-logo object-contain glow lg:w-56 lg:h-56"
/>
<span className="text-4xl mr-10 ml-[-9] font-bold text-white mx-4">x</span>
<img
  src={exhibitionLogoUrl}
  alt="Exhibition Logo"
  className="h-15 w-14 exhibition-logo object-contain glow lg:w-32 lg:h-32 md:h-24 md:w-24 sm:w-16 sm:h-16"
/>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Discover ADA-3</h2>
        <p className="text-gray-300 dark:text-gray-500">
          Immerse yourself in the intersection of art and technology with ADA-3 x DPS. 
          Welcome to ADA-3, a collaborative project by 3 anonymous students of DPS Ranchi. ADA-3 is a multi-functional platform designed to cater to various aspects of information management and user interaction. Our team has successfully implemented several key features, and we're excited to share them with you.
        </p>
        <p className="text-gray-300 dark:text-gray-500 mt-4">
          From interactive installations to thought-provoking displays, we curate experiences that
          captivate and inspire.
        </p>
        <div className="mt-6">
          <button href="https://dpsranchi.pages.dev/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Explore Exhibitions
          </button>
        </div>
      </div>
    </div></>
  );
};

export default Home;

