import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactPage } from './views/ContactPage/ContactPage';
import { ContactDetailsPage } from './views/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './views/ContactEditPage/ContactEditPage';
import { HomePage } from './views/HomePage/HomePage';
import { StatisticPage } from './views/StatisticPage/StatisticPage';
import './App.scss';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { Signup } from './views/Signup/Signup';

export function App() {
  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <Switch>
          <Route component={StatisticPage} path='/statistic' />
          <Route component={Signup} path='/signup' />
          <Route component={ContactEditPage} path='/contact/edit/:id?' />
          <Route component={ContactDetailsPage} path='/contact/:id' />
          <Route component={ContactPage} path='/contact' />
          <Route component={HomePage} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
