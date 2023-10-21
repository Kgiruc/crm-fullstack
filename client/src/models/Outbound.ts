export interface Outbound {
  id?: string;
  wz_number: string;
  delivery_date: string;
  from_company: string;
  from_street: string;
  from_postal_code: string;
  from_city: string;
  to_company: string;
  to_street: string;
  to_postal_code: string;
  to_city: string;
  receiving_person: string;
  destination: string;
  order_number: string;
}
