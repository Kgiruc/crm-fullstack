export interface Agreement {
  id?: string;
  customer_id: string;
  title: string;
  date_sign?: string;
  date_end?: string;
  value: number;
  description: string;
  created_at?: string;
  updated_at?: string;
  name?: string;
  surname?: string;
  e_mail?: string;
  address?: string;
  phone_number?: string;
}
