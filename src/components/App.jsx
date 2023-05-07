import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

  handleFilter = text => {
    this.setState({ filter: text });
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter contacts={this.state.contacts} onChange={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onSubmit={this.deleteContact}
        />
      </div>
    );
  }
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   addContact = () => {
//     const { name, number } = this.state;
//     const newContact = { id: nanoid(), name, number };
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],

//       name: '',
//       number: '',

//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { contacts, name, number, filter } = this.state;

//      const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//     )

//     return (
//       <div>
// <h1>Phonebook</h1>
//   {/* <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... /> */}

//         <h2>Phonebook</h2>
//         <p>Name</p>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChange}
//         />

//         <p>Number</p>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleChange}
//         />
//         <br></br>
//         <button onClick={this.addContact}>Add contact</button>

//         <h2>Contacts</h2>
//         <input
//           type="text"
//           name="filter"
//           value={filter}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChange}
//         />

//         <ul>
//           {filteredContacts.map(contact => (
//             <li key={contact.id}>
//               {contact.name}
//               {contact.number}
//               <button onClick={() => this.deleteContact(contact.id)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
