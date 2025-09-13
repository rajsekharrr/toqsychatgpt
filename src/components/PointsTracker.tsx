export default function PointsTracker() {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
      <p className="text-gray-700">Points: <span className="font-bold">120</span></p>
      <p className="text-gray-700">Streak: <span className="font-bold">3 days</span></p>
    </div>
  );
}
