import { supabase } from './supabase';

/**
 * Send email notification for form submissions
 * @param record The record data from the form submission
 * @param type The type of submission (registration, contact, visa, idea)
 */
export const sendEmailNotification = async (record: any, type: 'registration' | 'contact' | 'visa' | 'idea') => {
  try {
    console.log('Sending email notification:', { type, recordId: record?.id || 'no-id' });
    console.log('Record data being sent:', JSON.stringify(record, null, 2));
    
    // Make sure we're using the correct function name
    const functionName = 'send-email-notification';
    console.log(`Invoking Edge Function: ${functionName} with type: ${type}`);
    
    // Prepare the payload in the expected format
    const payload = { 
      type: type,
      record: record 
    };
    console.log('Full payload being sent to edge function:', JSON.stringify(payload, null, 2));
    
    const { data, error } = await supabase.functions.invoke(functionName, {
      body: payload
    });
    
    if (error) {
      console.error('Error invoking edge function for email notification:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return { success: false, error };
    }
    
    console.log('Email notification sent successfully, response:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Exception sending email notification:', error);
    console.error('Exception stack:', error.stack);
    return { success: false, error };
  }
};