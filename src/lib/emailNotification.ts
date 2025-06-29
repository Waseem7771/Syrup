import { supabase } from './supabase';

/**
 * Send email notification for form submissions
 * @param record The record data from the form submission
 * @param type The type of submission (registration, contact, visa, idea)
 */
export const sendEmailNotification = async (record: any, type: 'registration' | 'contact' | 'visa' | 'idea') => {
  try {
    console.log('Sending email notification:', { type, record });
    
    console.log('Attempting to invoke Edge Function...');
    const { data, error } = await supabase.functions.invoke('send-email-notification', {
      body: { record, type }
    });
    
    if (error) {
      console.error('Error sending email notification:', error);
      return { success: false, error };
    }
    
    console.log('Email notification sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('!!! EXCEPTION IN SEND EMAIL NOTIFICATION:', error);
    return { success: false, error };
  }
};