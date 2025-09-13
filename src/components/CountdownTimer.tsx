"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(10);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && seconds > 0) {
      const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [active, seconds]);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <h3 className="text-lg font-semibold mb-2">Countdown</h3>
      <p className="text-3xl font-bold text-indigo-600">{seconds}s</p>
      <button
        onClick={() => {
          setSeconds(10);
          setActive(true);
        }}
        className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
      >
        Start 10s Timer
      </button>
    </div>
  );
}
