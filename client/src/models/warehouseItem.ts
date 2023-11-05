export interface WarehouseItem {
  id: number;
  item_code: string;
  item_name: string;
  allocated_quantity: number;
  unit_of_measure: string;
  issued_quantity: number;
  unit_price: number;
  account_code: string;
  synthetic_account_code: string;
  stock_quantity: number;
}
