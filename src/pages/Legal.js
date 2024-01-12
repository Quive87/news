import Navigation from "../components/Navigation";
import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';

const Legal = () => {
    const history = createBrowserHistory();

    useEffect(() => {
      // Redirect to Google after 3 seconds (adjust as needed)
      const redirectTimer = setTimeout(() => {
        window.location.href = 'https://ada-legalai.vercel.app';
      }, 0.001);
  
      // Clear the timer when the component unmounts (cleanup)
      return () => clearTimeout(redirectTimer);
    }, []);

    return (
       // <div>
      //      <Navigation />
           // <div class="dark:bg-gray-800 pt-16 rounded-md shadow-md w-screen h-screen flex items-center justify-center">
   // <iframe 
     //   src="https://ada-legalai.vercel.app"  
    //    class="rounded-md overflow-hidden w-full h-full"
  //      allowfullscreen
  //></iframe>
   // </div>
   //     </div>
   <div>
 </div>
    );
}

export default Legal;