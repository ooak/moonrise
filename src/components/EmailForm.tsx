import React, { useState } from 'react';
import { EmailSubscriptionService } from '../services/EmailSubscriptionService';
interface EmailFormProps {
  onSubscribed?: () => void;
}
export const EmailForm: React.FC<EmailFormProps> = ({
  onSubscribed
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage('Please enter your email address');
      setStatus('error');
      return;
    }
    setIsSubmitting(true);
    // Save the email
    const result = EmailSubscriptionService.saveEmail(email);
    setIsSubmitting(false);
    setMessage(result.message);
    setStatus(result.success ? 'success' : 'error');
    if (result.success) {
      setEmail('');
      if (onSubscribed) {
        onSubscribed();
      }
    }
  };
  return <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3" disabled={isSubmitting} />
        <button type="submit" className="w-full bg-[#2C5F2D] hover:bg-[#234a24] text-white font-bold py-3 rounded-md transition duration-300 disabled:bg-gray-400" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Get Early Access'}
        </button>
      </form>
      {message && <div className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </div>}
    </div>;
};