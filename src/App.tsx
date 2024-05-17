import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import CategoryPage from './pages/CategoryPage';
import TemplateDetailPage from './pages/TemplateDetail';
import CustomizationPanel from './components/CustomizationPanel';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AdminRoute from './components/AdminRoute';
import TemplateUpload from './components/TemplateUpload';
import TemplateManagement from './components/TemplateManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/template/:id" element={<TemplateDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/upload" element={<AdminRoute element={<TemplateUpload />} />} />
        <Route path="/admin/manage" element={<AdminRoute element={<TemplateManagement />} />} />
      </Routes>
      <CustomizationPanel />
    </Router>
  );
};

export default App;
