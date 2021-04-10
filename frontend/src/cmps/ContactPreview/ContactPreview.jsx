import { Link } from 'react-router-dom';
import './ContactPreview.scss';
import { getRandColor } from '../../services/utilService.js';

export function ContactPreview({ contact }) {
  return (
    <Link to={'/contact/' + contact._id}>
      <li className='flex align-center contact-preview'>
        <img
          src={`https://robohash.org/set_set5/${contact.name}?size=200x200`}
          style={{ backgroundColor: getRandColor() }}
          alt=''
        />
        <p>{contact.name}</p>
      </li>
    </Link>
  );
}
