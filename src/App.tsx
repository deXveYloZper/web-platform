// src/App.tsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/index';
import CategoryPage from './pages/Category';
import TemplateDetailPage from './pages/TemplateDetail';
import CustomizationPanel from './components/CustomizationPanel';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/template/:id" component={TemplateDetailPage} />
      </Switch>
      <CustomizationPanel />
    </Router>
  );
};

export default App;
