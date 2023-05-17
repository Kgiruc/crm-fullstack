import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Agreements from './pages/Agreements/Agreements';
import Contacts from './pages/Contacts/Contacts';
import Customers from './pages/Customers/Customers';
import Invoices from './pages/Invoices/Invoices';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Tasks from './pages/Tasks/Tasks';
import AddCustomer from './pages/Customers/componenets/AddCustomer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agreements" element={<Agreements />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/add" element={<AddCustomer />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
