import { Component } from 'react';
import { connect } from 'react-redux';
import { ContactList } from '../../cmps/ContactList';
import './ContactPage.scss';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter.jsx';
import { Link } from 'react-router-dom';
import { loadContacts } from '../../store/actions/contactActions.js';

class _ContactPage extends Component {


  componentDidMount() {
    this.loadContacts();
  }

  onChangeFilter = (term) => {
    this.loadContacts(term);
  };

  async loadContacts(filterBy = {}) {
    await this.props.loadContacts(filterBy);
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className='main-layout contact-page'>
        <div className='flex align-center container'>
          <ContactFilter onChangeFilter={this.onChangeFilter} />
          <Link className='flex align-center justify-center' to='/contact/edit'>
            <img title='Create User' src={require('../../assets/icons/add-user/1x/baseline_person_add_alt_white_24dp.png').default} alt='' />
          </Link>
        </div>
        {contacts && <ContactList contacts={contacts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
});

const mapDispatchToProps = {
  loadContacts,
};

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);
