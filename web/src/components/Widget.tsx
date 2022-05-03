import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
export function Widget() {
  const [] = useState(false)
  return (
    <div className="absolute bottom-5 right-5">
      <p>Hello World.</p>
      <button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center justify-center group">
        <ChatTeardropDots className="h-6 w-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
}
