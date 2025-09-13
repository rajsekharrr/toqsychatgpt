"use client";

import IcebreakerBox from "@/components/IcebreakerBox";
import CountdownTimer from "@/components/CountdownTimer";
import TaskCard from "@/components/TaskCard";
import PointsTracker from "@/components/PointsTracker";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <IcebreakerBox />
      <CountdownTimer />
      <TaskCard />
      <PointsTracker />
    </div>
  );
}
