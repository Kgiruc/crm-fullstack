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
import AddCustomer from './pages/Customers/components/AddCustomer';
import UpdateCustomer from './pages/Customers/components/UpdateCustomer';
import AuthRoutes from './auth/authRoutes';
import Profile from './pages/Profie/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthRoutes />}>
        <Route path="/agreements" element={<Agreements />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/customers/update/:id" element={<UpdateCustomer />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
