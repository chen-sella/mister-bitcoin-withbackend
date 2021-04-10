import { Component } from 'react';
import { userService } from '../../services/userService';

import './Signup.scss';

export class Signup extends Component {
  state = {
    user: null,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({ user: { ...prevState.user, [field]: value } }));
  };

  signup = async (ev) => {
    ev.preventDefault();
    await userService.signup(this.state.user);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className=' main-layout bgc-img signup-container'>
        <form className='flex column align-center' onSubmit={this.signup}>
          <img src={require('../../assets/img/bitcoin.png').default} alt='' />
          <h3>Signup for your account:</h3>
          <input
            required
            placeholder='Full name'
            type='text'
            name='fullname'
            id='fullname'
            onChange={this.handleChange}
          />
          <input
            required
            placeholder='User name'
            type='text'
            name='username'
            id='username'
            onChange={this.handleChange}
          />
          <input
            required
            placeholder='password'
            type='password'
            name='password'
            id='name'
            onChange={this.handleChange}
          />
          <button>Signup</button>
        </form>
      </div>
    );
  }
}
