import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import TemplateDetailPage from './pages/TemplateDetail';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AdminRoute from './components/AdminRoute';
import TemplateUpload from './components/TemplateUpload';
import TemplateManagement from './components/TemplateManagement';
import PurchasePage from './pages/PurchasePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/template/:id" element={<TemplateDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/upload" element={<AdminRoute element={<TemplateUpload />} />} />
        <Route path="/admin/manage" element={<AdminRoute element={<TemplateManagement />} />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
   
      <Footer />
    </>
  );
};

export default App;
