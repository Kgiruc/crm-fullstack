import { Link } from 'react-router-dom';

function Store() {
  return (
    <div>
      <Link to="/documents/new">Dodaj nowy</Link>
      <Link to="/documents/editions">Doumenty wydania</Link>
      <Link to="/documents/acknowledge ">Dokumenty przyjęcia</Link>
    </div>
  );
}

export default Store;
