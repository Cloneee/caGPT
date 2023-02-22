import ChatItem from "./components/ChatItem";
import "./App.css";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    setConversation([
      ...conversation,
      text.replace("\n", ""),
      new Array(Math.floor(Math.random() * 100) + 1).fill("ọc").join(" "),
    ]);
    setText("");
  };

  return (
    <div className="h-screen flex flex-col pb-4">
      <div className="flex-1 ">
        {conversation.length === 0 ? (
          <div className="flex justify-center text-white text-2xl font-bold mt-8">
            Chat something
          </div>
        ) : (
          conversation.map((el, i) => {
            return (
              <>
                <ChatItem
                  isUser={i % 2 === 0 || i === 0}
                  content={el}
                  key={el}
                />
              </>
            );
          })
        )}
      </div>
      <div className="flex-initial">
        <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
          <div className="flex flex-col w-full py-2 md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <textarea
              rows="1"
              class="m-0 w-full resize-none bg-transparent p-0 pl-2 pr-7 border-none focus:ring-0 focus:outline-none"
              style={{
                maxHeight: "200px",
                height: "24px",
                overflowY: "hidden",
              }}
              onKeyDown={(e) => (e.key === "Enter" ? handleSubmit(e) : null)}
              onChange={handleChange}
              value={text}
            />
            <button
              class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
              onClick={handleSubmit}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
