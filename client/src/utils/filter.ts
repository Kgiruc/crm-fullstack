interface FilterProps {
  functionQuery(value: string): Promise<{ data: string[] }>;
  value: string;
}

// eslint-disable-next-line import/prefer-default-export
export const filterFunction = async ({ functionQuery, value }: FilterProps) => {
  const response = await functionQuery(value);
  return response.data;
};
