import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearch from './components/CompanySearch';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Favorites from './components/Favorites';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={MainSearch} />
        <Route exact path='/:companyName' component={CompanySearch} />
        <Route exact path='/favorites' component={Favorites} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
