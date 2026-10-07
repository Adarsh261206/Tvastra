const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

interface EnquiryData {
  name: string;
  email: string;
  phone?: string;
  ageGroup?: string;
  program?: string;
  message?: string;
}

export async function sendEnquiryEmail(data: EnquiryData): Promise<boolean> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
    console.error('Web3Forms access key not configured');
    return false;
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        age_group: data.ageGroup || 'Not specified',
        program: data.program || 'Not sure yet',
        message: data.message || '',
        subject: `New Enquiry — ${data.name}`,
        from_name: 'TVASTRA Website',
      }),
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Failed to send enquiry email:', error);
    return false;
  }
}
