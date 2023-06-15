export interface Invoice {
  id?: string;
  customer_id: string;
  date_issue?: string;
  date_due?: string;
  amount: number;
  description: string;
  paid: boolean;
  contract_title?: string;
  name?: string;
  surname?: string;
}
