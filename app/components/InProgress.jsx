import React from 'react';

function InProgress() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f3f0ff] to-[#ffffff] flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-8 sm:p-12 text-center">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            🚧 Project in Progress
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            We're working hard to bring this feature to life.
          </p>
        </div>

        {/* Message Content */}
        <div className="text-gray-700 text-[17px] leading-relaxed space-y-6">
          <p>
            This page or feature is currently under development. We’re making improvements and adding exciting functionalities to deliver the best experience possible.
          </p>

          <p>
            Please check back soon or feel free to explore other parts of the application.
          </p>

          <p className="text-xl font-semibold text-[#673AB7] pt-4">
            Thanks for your patience!
          </p>
        </div>
      </div>
    </section>
  );
}

export default InProgress;
