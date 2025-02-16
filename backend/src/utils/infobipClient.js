const axios = require('axios');

const sendOtpSms = async (to, message) => {
  const url = `${INFOBIP_BASE_URL}/sms/2/text/advanced`;
  const headers = {
    Authorization: `App ${INFOBIP_API_KEY}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const data = {
    messages: [
      {
        destinations: [{ to }],
        from: 'Het', // Replace with your registered sender ID
        text: message,
      },
    ],
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error sending SMS via Infobip:', error.response?.data || error.message);
    throw new Error('Failed to send OTP');
  }
};

module.exports = { sendOtpSms };
