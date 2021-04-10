import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

export function AppHeader() {
  return (
    <div className='flex align-center space-between app-header'>
      <h1>Digital Wallet</h1>
      <ul className='flex clean-list'>
        <li className='flex align-center justify-center'>
          <NavLink activeClassName='active' exact to='/'>
            <img
              title='Home'
              src={require('../../assets/icons/home/1x/baseline_home_white_24dp.png').default}
              alt=''
            ></img>
          </NavLink>
        </li>
        <li className='flex align-center justify-center'>
          <NavLink activeClassName='active' to='/contact'>
            <img
              title='Contacts'
              src={require('../../assets/icons/contacts/1x/baseline_import_contacts_white_24dp.png').default}
              alt=''
            ></img>
          </NavLink>
        </li>
        <li className='flex align-center justify-center'>
          <NavLink activeClassName='active' to='/signup'>
            <img
              title='Signup'
              src={require('../../assets/icons/signup/1x/baseline_login_white_24dp.png').default}
              alt=''
            ></img>
          </NavLink>
        </li>
        <li className='flex align-center justify-center'>
          <NavLink activeClassName='active' to='/statistic'>
            <img
              title='Statistic'
              src={require('../../assets/icons/chart/1x/baseline_leaderboard_white_24dp.png').default}
              alt=''
            ></img>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
