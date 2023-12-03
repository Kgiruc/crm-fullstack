import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Agreements from './pages/Agreements/Agreements';
import Customers from './pages/Customers/Customers';
import Invoices from './pages/Invoices/Invoices';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Tasks from './pages/Tasks/Tasks';
import AddCustomer from './pages/Customers/components/AddCustomer';
import UpdateCustomer from './pages/Customers/components/UpdateCustomer';
import AuthRoutes from './auth/authRoutes';
import Profile from './pages/Profie/Profile';
import AddAgreement from './pages/Agreements/components/AddAgreement';
import UpdateAgreement from './pages/Agreements/components/UpdateAgreement';
import AddInvoices from './pages/Invoices/components/AddInvoices';
import UpdateInvoices from './pages/Invoices/components/UpdateInvoices';
import AddTask from './pages/Tasks/components/AddTask';
import EditTask from './pages/Tasks/components/EditTask';
import Warehouse from './pages/Warehouse/Magazin';
import Outbound from './pages/Documents/Outbound/Outbound';
import Inbound from './pages/Documents/Inbound/Inbound';
import AddOutbound from './pages/Documents/Outbound/components/AddOutbound';
import MenuBar from './pages/Home/components/MenuBar';

function App() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <Home />
      <Box sx={{ width: '100%' }}>
        <MenuBar />
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path="/agreements" element={<Agreements />} />
            <Route path="/agreements/:id" element={<Agreements />} />
            <Route path="/agreements/add" element={<AddAgreement />} />
            <Route
              path="/agreements/update/:id"
              element={<UpdateAgreement />}
            />

            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/add" element={<AddCustomer />} />
            <Route path="/customers/update/:id" element={<UpdateCustomer />} />

            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/:id" element={<Invoices />} />
            <Route path="/invoices/add" element={<AddInvoices />} />
            <Route path="/invoices/update/:id" element={<UpdateInvoices />} />

            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/add" element={<AddTask />} />
            <Route path="/tasks/update/:id" element={<EditTask />} />

            <Route path="/store" element={<Warehouse />} />

            <Route path="/documents/outbound" element={<Outbound />} />
            <Route path="/documents/outbound/add" element={<AddOutbound />} />
            <Route path="/documents/outbound" element={<Outbound />} />

            <Route path="/documents/inbound" element={<Inbound />} />

            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
