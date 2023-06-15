import { Agreement } from './agreement';
import { Invoice } from './invoice';

export interface Details {
  agreement: Agreement;
  isOpen: boolean;
}

export interface DetailsInv {
  invoice: Invoice;
  isOpen: boolean;
}
