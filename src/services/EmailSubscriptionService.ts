// Simple service to handle email subscriptions
export interface SubscriptionResult {
  success: boolean;
  message: string;
}
export class EmailSubscriptionService {
  private static STORAGE_KEY = 'moonrise_subscribed_emails';
  /**
   * Validates email format
   */
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  /**
   * Saves email to local storage
   * In a real app, this would send the email to a server API
   */
  static saveEmail(email: string): SubscriptionResult {
    try {
      // Validate email format
      if (!this.validateEmail(email)) {
        return {
          success: false,
          message: 'Please enter a valid email address'
        };
      }
      // Get existing emails
      const existingEmails = this.getSubscribedEmails();
      // Check if email already exists
      if (existingEmails.includes(email)) {
        return {
          success: false,
          message: 'This email is already subscribed'
        };
      }
      // Add new email and save
      existingEmails.push(email);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingEmails));
      return {
        success: true,
        message: 'Thank you for subscribing!'
      };
    } catch (error) {
      console.error('Error saving email:', error);
      return {
        success: false,
        message: 'An error occurred. Please try again.'
      };
    }
  }
  /**
   * Retrieves all subscribed emails
   */
  static getSubscribedEmails(): string[] {
    try {
      const storedEmails = localStorage.getItem(this.STORAGE_KEY);
      return storedEmails ? JSON.parse(storedEmails) : [];
    } catch (error) {
      console.error('Error retrieving emails:', error);
      return [];
    }
  }
}