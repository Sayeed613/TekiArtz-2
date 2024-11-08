function ContactCards({ title, Content }) {
    return (
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-3xl dark:bg-gray-800 bg-gray-300" />

        <div className="relative shadow-xl px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start dark:bg-gray-900 bg-white">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 dark:border-gray-500 border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 dark:text-gray-400 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl dark:text-white text-gray-800 mb-4 relative z-50">
            {title}
          </h1>

          <div className="font-normal text-base dark:text-gray-400 text-gray-600 mb-4 relative z-50">
            {Content}
          </div>
        </div>
      </div>
    );
  }

  export default ContactCards;
