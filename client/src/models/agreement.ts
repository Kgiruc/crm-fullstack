export interface Agreement {
    id?: string;
    customer_id: string;
    name: string;
    date_sign: Date;
    date_end: Date;
    value: number;
    description: string;
}
