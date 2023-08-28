import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';
import { Outbound } from '../models/Outbound';
import templateFile from '../assets/files/tag-example.docx';

const generateAndDownloadDocx = async (outbound: Outbound) => {
  const response = await fetch(templateFile);
  const content = await response.arrayBuffer();

  // Konwersja tablicy bajtów na ArrayBuffer
  const arrayBuffer = new Uint8Array(content).buffer;

  const zip = new PizZip(arrayBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.setData({
    delivery_date: outbound.delivery_date,
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

  saveAs(out, `outbound_${outbound.id}.docx`);
};

export default generateAndDownloadDocx;
