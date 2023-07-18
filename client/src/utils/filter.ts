interface FilterProps {
  functionQuery(value: string): void;
  value: string;
}

const filterFunction = ({ functionQuery, value }: FilterProps) => {
  const { data } = functionQuery(value);
  return data;
};

export default filterFunction;
