import { ChangeEvent, useState } from 'react';
import { filterFunction } from '../utils/filter';

interface SearchBarProps {
  functionQuery(value: string): Promise<{ data: string[] }>;
}

function SearchBar({ functionQuery }: SearchBarProps) {
  const [filter, setFilter] = useState('');
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    filterFunction({ functionQuery, value: newFilter });
  };
  return (
    <div>
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
}

export default SearchBar;
