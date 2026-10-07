const WHATSAPP_NUMBER = '918291418107';

export function openWhatsApp(program?: string, ageGroup?: string) {
  let message = '';

  if (program && ageGroup) {
    message = `Hi TVASTRA Art Studio! I'm interested in the "${program}" program for ${ageGroup}. Could you share more details about timing, fees, and how to get started?`;
  } else if (program) {
    message = `Hi TVASTRA Art Studio! I'm interested in "${program}". Could you share more details about timing, fees, and how to get started?`;
  } else if (ageGroup) {
    message = `Hi TVASTRA Art Studio! I'm interested in art classes for ${ageGroup}. Could you share more details about available programs, timing, and fees?`;
  } else {
    message = `Hi TVASTRA Art Studio! I'd like to know more about your art classes and programs. Could you share details about timing, fees, and how to get started?`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
