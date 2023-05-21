import { Link } from 'react-router-dom';

function Home() {
  return (
    <header>
      <h1>CRM zmiana nazwy </h1>
      <nav>
        <Link to="/customers">Klienci</Link>
        <Link to="/contacts">Kontakty</Link>
        <Link to="/agreements">Umowy</Link>
        <Link to="/invoices">faktury</Link>
        <Link to="/tasks">zadania</Link>
        <section>
          <Link to="/login">zaloguj się</Link>
          <Link to="/register">rejestracja</Link>
        </section>
      </nav>
    </header>
  );
}

export default Home;
