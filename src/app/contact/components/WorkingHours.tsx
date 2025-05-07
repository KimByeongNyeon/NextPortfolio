export default function WorkingHours() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">근무 시간</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">월요일 - 금요일:</span>
          <span className="font-medium">9:00 - 18:00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">토요일:</span>
          <span className="font-medium">10:00 - 15:00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">일요일:</span>
          <span className="font-medium">휴무</span>
        </div>
      </div>
    </div>
  );
}
