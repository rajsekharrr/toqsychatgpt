"use client";

import { useState } from "react";

export default function IcebreakerBox() {
  const [context, setContext] = useState("");
  const [icebreaker, setIcebreaker] = useState("");

  const generateIcebreaker = () => {
    setIcebreaker(`Try asking: "What's been exciting in your life recently?" (context: ${context})`);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-2">Icebreaker Generator</h3>
      <input
        type="text"
        placeholder="Enter a situation (e.g., office, party)"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg mb-2"
      />
      <button
        onClick={generateIcebreaker}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
      >
        Generate
      </button>
      {icebreaker && <p className="mt-3 text-gray-700">{icebreaker}</p>}
    </div>
  );
}
