import Docxtemplater from 'docxtemplater';
import { DateTime } from 'luxon';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';
import { Outbound } from '../models/Outbound';
import wzFile from '../assets/files/wz.docx';

const generateAndDownloadDocx = async (outbound: Outbound) => {
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
    from_city: outbound.from_city,
    wz_number: outbound.wz_number,
    // Dodaj inne dane
  });

  try {
    doc.render();
  } catch (error) {
    console.log(JSON.stringify({ error }));
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
