import Docxtemplater from 'docxtemplater';
import { DateTime } from 'luxon';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';
import { Outbound } from '../models/outbound';
import wzFile from '../assets/files/wz.docx';
import { Account } from '../models/Account';

const generateAndDownloadDocx = async (
  outbound: Outbound,
  profilInfo: Account
) => {
  const response = await fetch(wzFile);
  const content = await response.arrayBuffer();

  // Konwersja tablicy bajtów na ArrayBuffer
  const arrayBuffer = new Uint8Array(content).buffer;

  const zip = new PizZip(arrayBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.setData({
    delivery_date: DateTime.fromISO(outbound.delivery_date).toISODate(),
    id: outbound.id,
    wz_number: outbound.wz_number,
    to_company: outbound.to_company,
    from_company: outbound.from_company,
    to_street: outbound.to_street,
    from_street: outbound.from_street,
    to_postal_code: outbound.to_postal_code,
    from_postal_code: outbound.from_postal_code,
    to_city: outbound.to_city,
    from_city: outbound.from_city,
    receiving_person: outbound.receiving_person,
    profil: profilInfo.login,
  });

  try {
    doc.render();
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify({ error }));
    throw error;
  }

  const out = doc.getZip().generate({
    type: 'blob',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });

  saveAs(out, `outbound_wz_${outbound.wz_number}.docx`);
};

export default generateAndDownloadDocx;
