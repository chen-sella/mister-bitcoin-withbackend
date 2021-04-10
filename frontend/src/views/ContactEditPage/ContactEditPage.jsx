import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService.js';
import { saveContact, removeContact } from '../../store/actions/contactActions.js';
import './ContactEditPage.scss';

class _ContactEditPage extends Component {
  state = {
    contact: null,
    errMsg: '',
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact();
      this.setState({ contact });
    } catch (err) {
      this.setState({ errMsg: 'Contact Not Found' });
    }
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }));
  };

  onSaveContact = async (ev) => {
    ev.preventDefault();
    await this.props.saveContact({ ...this.state.contact });
    this.props.history.push('/contact');
  };

  onDeleteContact = async () => {
    await this.props.removeContact(this.state.contact._id);
    this.props.history.push('/contact');
  };

  get back() {
    return this.state.contact._id ? this.state.contact._id : '';
  }

  render() {
    if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>;
    const { name, email, phone } = this.state.contact;
    return (
      <div className='flex column align-center main-layout contact-edit'>
        <div className='flex align-center space-between actions'>
          <Link className='flex align-center justify-center' to={'/contact/' + this.back}>
            <img title='Back' src={require('../../assets/icons/back/1x/baseline_west_white_24dp.png').default} alt='' />
          </Link>
          {this.state.contact._id && (
            <button className='flex align-center justify-center' onClick={this.onDeleteContact}>
              <img title='Delete' src={require('../../assets/icons/delete/1x/baseline_delete_white_24dp.png').default} alt='' />
            </button>
          )}
        </div>
        <form onSubmit={this.onSaveContact}>
          <div className='flex align-center input-container'>
            <label htmlFor='name'>Name:</label>
            <input required name='name' type='text' id='name' value={name} onChange={this.handleChange} />
          </div>
          <div className='flex align-center input-container'>
            <label htmlFor='email'>Email:</label>
            <input required name='email' type='email' id='email' value={email} onChange={this.handleChange} />
          </div>
          <div className='flex align-center input-container'>
            <label htmlFor='phone'>Phone:</label>
            <input required name='phone' type='tel' id='phone' value={phone} onChange={this.handleChange} />
          </div>
          <p>{this.state.errMsg}</p>
          <button className="save-btn">Save Contact</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveContact,
  removeContact,
};

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage);
