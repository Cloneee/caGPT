import React from "react";

export default function ChatItem({ isUser, content }) {
  const bg = isUser
    ? "w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800"
    : "w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]";
  return (
    <div className={bg}>
      <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
        <div className="w-[30px] flex flex-col relative items-end">
          <div className="relative flex">
            {isUser? (<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded font-medium">
              You
            </div>):
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded font-medium">
              CáGPT
            </div>}
          </div>
        </div>
        <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
          <div className="flex flex-grow flex-col gap-3">
            <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap text-white">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
