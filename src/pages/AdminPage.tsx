import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { EmailSubscriptionService } from '../services/EmailSubscriptionService';
export const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  // Simple admin password - in a real app, use proper authentication
  const ADMIN_PASSWORD = 'moonrise2023';
  // Set the document title immediately when the component mounts
  useEffect(() => {
    document.title = 'Moonrise Natural';
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      // Load emails from storage
      const subscribedEmails = EmailSubscriptionService.getSubscribedEmails();
      setEmails(subscribedEmails);
    }
  }, [isAuthenticated]);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };
  const handleCopyEmails = () => {
    navigator.clipboard.writeText(emails.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <Link to="/" className="flex items-center text-gray-600 mb-6 hover:text-[#2C5F2D]">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <button type="submit" className="w-full bg-[#2C5F2D] hover:bg-[#224b24] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </form>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Link to="/" className="text-gray-600 hover:text-[#2C5F2D] flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl">
          <h2 className="text-xl font-bold mb-4">Email Subscriptions</h2>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">
              Total Subscribers: {emails.length}
            </p>
            <button onClick={handleCopyEmails} className="flex items-center text-[#2C5F2D] hover:text-[#224b24]">
              {copied ? <>
                  <Check size={16} className="mr-1" />
                  Copied!
                </> : <>
                  <Copy size={16} className="mr-1" />
                  Copy All Emails
                </>}
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto border rounded p-2">
            {emails.length > 0 ? <ul>
                {emails.map((email, index) => <li key={index} className="py-1 border-b last:border-0">
                    {email}
                  </li>)}
              </ul> : <p className="text-gray-500 text-center py-4">
                No subscribers yet
              </p>}
          </div>
        </div>
      </div>
    </div>;
};