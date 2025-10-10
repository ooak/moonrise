import React from 'react';
import { EmailForm } from './EmailForm';
import { X } from 'lucide-react';
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-md overflow-auto max-h-[90vh] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 transition-colors z-10" aria-label="Close popup">
          <X size={20} />
        </button>
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#333333] mb-3">
            We Know — You Were Ready to Finally Fix This Problem
          </h2>
          <p className="mb-3 text-sm sm:text-base">You've been dealing with:</p>
          <ul className="mb-4 space-y-1 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>Harsh chemicals that make you sick</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>"Natural" products that don't actually work</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>Guilt about all those plastic bottles</span>
            </li>
          </ul>
          <p className="mb-3 text-sm sm:text-base">
            And you just found something that might actually solve it.
          </p>
          <p className="font-medium mb-2 text-sm sm:text-base">
            Here's the thing: We're not launched yet.
          </p>
          <p className="mb-3 text-sm sm:text-base">But we will be soon.</p>
          <p className="mb-4 text-sm sm:text-base">
            Drop your email below and you'll be the FIRST to know when we're
            ready — plus you'll get an exclusive launch discount we're not
            offering to anyone else.
          </p>
          <div className="mb-3">
            <EmailForm />
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500">
            One email. Big difference. Zero spam.
          </p>
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-2 mb-3">
            Join 1,247 others who are waiting to transform their cleaning
            routine.
          </p>
          <div className="flex justify-center">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-sm flex items-center py-1.5 px-3 rounded hover:bg-gray-100 transition-colors">
              <X size={16} className="mr-1" /> Close
            </button>
          </div>
        </div>
      </div>
    </div>;
};