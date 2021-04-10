import './ContactList.scss';
import { ContactPreview } from '../ContactPreview';

export function ContactList({ contacts, onSelectContact }) {
  return (
    <div className='contact-list-container'>
      <h2>{contacts.length} Contacts</h2>
      <ul className='clean-list contact-list'>
        {contacts &&
          contacts.map((contact) => (
            <ContactPreview key={contact._id} onSelectContact={onSelectContact} contact={contact} />
          ))}
      </ul>
    </div>
  );
}
