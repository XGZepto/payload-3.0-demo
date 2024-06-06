import { FieldHook } from 'payload/types';
import sendSMS from '../../../utils/sendSMS'
import { Order, Tailor } from 'payload-types';

// Define the hook as a function that can be exported and used in your Orders collection config on the status field
export const handleStatusChange: FieldHook<Order> = async ( {previousValue, value, originalDoc, req: {user, payload} } ) => {
  
  const newStatus = value;

  if (!originalDoc) {
    return;
  }

  if (newStatus === 'completed' && previousValue !== 'completed') {
    const tailoredBy = originalDoc?.tailoredBy;

    if (typeof tailoredBy === 'string') {
      // Case when tailoredBy is an ID
      try {
        console.log(user)
        const tailorData = await payload.find({
          collection: 'tailors',
          where: {
            _id: {
              equals: tailoredBy
            }
          }
        });
        const tailor = tailorData.docs[0];

        if (tailor) {
          await sendSMSFromTailorInfo(tailor, originalDoc);
        }
      } catch (error) {
        console.error('Failed to fetch tailor details:', error);
      }
    } else if (typeof tailoredBy === 'object' && tailoredBy !== null) {
      // Case when tailoredBy is a full tailor object
      try {
        await sendSMSFromTailorInfo(tailoredBy, originalDoc);
      } catch (error) {
        console.error('Error sending SMS with provided tailor object:', error);
      }
    }
  }
  return value
};

async function sendSMSFromTailorInfo(tailor: Tailor, doc: Order) {
  const sms = {
    receiver: `+1${doc.phoneNumber}`,
    text: `Hello ${doc.contactPerson}, your order is ready! Tailor: ${tailor.businessName}, Address: ${tailor.address.street}, ${tailor.address.city}, ${tailor.address.state} ${tailor.address.zip}.`
  };

  // Send the SMS
  await sendSMS(sms).catch(error => console.error('Error sending SMS:', error));
}
