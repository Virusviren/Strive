import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearch from './components/CompanySearch';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={MainSearch} />
      <Route exact path='/:companyName' component={CompanySearch} />
    </BrowserRouter>
  );
}

export default App;
