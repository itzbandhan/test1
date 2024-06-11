import React from 'react';
import Button from '../components/Button';

function Error() {
  return (
    <div>
              <div className="flex items-center flex-col justify-center lg:flex-row py-20 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block w-[75%]" src="public/404.svg" alt="" />
                <img className="hidden md:block lg:hidden" src="public/404.svg" alt="" />
                <img className="md:hidden" src="public/404.svg" alt="" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">Looks like you've found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-gray-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <br />
   <button className=' py-2 px-6  bg-black dark:bg-dark-2 border-dark dark:border-dark-2 border inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
    <a href="/">Return to home</a>
   </button>

            </div>
        </div>
    </div>
  )
}

export default Error
