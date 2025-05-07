import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">페이지를 찾을 수 없습니다</h2>
      <p className="text-lg mb-8 text-gray-600 max-w-md mx-auto">
        요청하신 페이지를 찾을 수 없습니다. 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
} 