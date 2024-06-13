import Twilio from "twilio/lib/rest/Twilio";

const twilioClient = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

interface SMS {
    receiver: string;  // Phone number of the recipient
    text: string;      // Text message to be sent
  }
  

export default async function sendSMS(sms: SMS): Promise<void> {
  
  console.log('Sending SMS:', sms)
  
  return twilioClient.messages.create({
    body: sms.text,
    to: sms.receiver,
    from: process.env.TWILIO_PHONE_NUMBER
  })
  .then(message => console.log(`Message sent: ${message.sid}`))
  .catch(error => console.error('Failed to send SMS:', error));
}