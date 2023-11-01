import { Link } from 'react-router-dom';

function LinksDoc() {
  return (
    <div>
      <Link to="/documents/new">Dodaj nowy</Link>
      <Link to="/documents/inbound">Doumenty wydania</Link>
      <Link to="/documents/outbound ">Dokumenty przyjęcia</Link>
    </div>
  );
}

export default LinksDoc;
