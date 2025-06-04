import axios from 'axios';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

const airtableAPI = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export interface ContactFormData {
  companyName: string;
  email: string;
  phone: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const airtableData = {
      records: [
        {
          fields: {
            'Nombre de Empresa': data.companyName,
            'Email': data.email,
            'Teléfono': data.phone,
            'Mensaje': data.message,
            'Fecha de Contacto': new Date().toISOString(),
            'Estado': 'Nuevo'
          }
        }
      ]
    };

    const response = await airtableAPI.post('', airtableData);
    return response.data;
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    throw error;
  }
}; 