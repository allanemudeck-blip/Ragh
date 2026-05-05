export const WHATSAPP_NUMBER = '256755315932';
export const WHATSAPP_URL = 'https://wa.me/';

export const getWhatsAppLink = (message: string) => {
  return `${WHATSAPP_URL}${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
