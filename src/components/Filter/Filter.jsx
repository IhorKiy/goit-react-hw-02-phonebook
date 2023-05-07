import React, { Component } from 'react';
import css from 'components/Filter/Filter.module.css'

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
    this.props.onChange(evt.currentTarget.value);
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          className={css.input}
          
          type="text"
          name="filter"
          value={filter}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
