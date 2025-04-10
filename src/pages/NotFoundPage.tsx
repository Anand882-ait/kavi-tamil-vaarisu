
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-tamil-blue mb-4">404</h1>
        <p className="text-2xl font-semibold mb-6">Page Not Found</p>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <HomeIcon className="mr-2 h-5 w-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
