/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ReviewSection = () => {
    return (
        <div className="flex h-auto">
        <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div className="flex-auto p-4 md:p-6">
            <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              With Preline, were able to easily track our performance in full detail. Its become an essential tool for us to grow and engage with our audience. 
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
              </div>

              <div className="grow ml-3">
                <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  Josh Tyson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Product Manager | Capsule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewSection;