// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import CategoryPage from './pages/Category';
import TemplateDetailPage from './pages/TemplateDetail';
import CustomizationPanel from './components/CustomizationPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/template/:id" element={<TemplateDetailPage />} />
      </Routes>
      <CustomizationPanel />
    </Router>
  );
};

export default App;

