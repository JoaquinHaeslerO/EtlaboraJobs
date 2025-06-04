export interface ContactFormData {
  companyName: string;
  email: string;
  phone: string;
  message: string;
}

interface StorageRecord {
  id: string;
  fields: {
    'Nombre de Empresa': string;
    'Email': string;
    'Teléfono': string;
    'Mensaje': string;
    'Fecha de Contacto': string;
    'Estado': 'Nuevo' | 'En proceso' | 'Contactado';
  };
  createdTime: string;
}

const STORAGE_KEY = 'etlabora_contacts';

// Simular un delay para hacer la experiencia más realista
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Simular delay de red
    await delay(1000);

    // Crear nuevo registro
    const newRecord: StorageRecord = {
      id: `rec${Date.now()}`,
      fields: {
        'Nombre de Empresa': data.companyName,
        'Email': data.email,
        'Teléfono': data.phone,
        'Mensaje': data.message,
        'Fecha de Contacto': new Date().toISOString(),
        'Estado': 'Nuevo'
      },
      createdTime: new Date().toISOString()
    };

    // Obtener registros existentes
    const existingRecords = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    // Añadir nuevo registro
    existingRecords.push(newRecord);
    
    // Guardar en localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingRecords));

    // Simular respuesta de API
    return {
      success: true,
      record: newRecord
    };
  } catch (error) {
    console.error('Error guardando el contacto:', error);
    throw new Error('Error al guardar el contacto');
  }
};

// Función auxiliar para ver los contactos guardados
export const getStoredContacts = (): StorageRecord[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}; 