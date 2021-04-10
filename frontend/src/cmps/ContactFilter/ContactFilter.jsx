import { Component } from 'react';

import './ContactFilter.scss';

export class ContactFilter extends Component {
  state = {
    term: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter({ ...this.state });
    });
  };

  render() {
    const { term } = this.state;
    return (
      <div>
        <form className='flex align-start contact-filter' onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor='term'></label>
          <input type='text' id='term' placeholder="Search..." name='term' value={term} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
