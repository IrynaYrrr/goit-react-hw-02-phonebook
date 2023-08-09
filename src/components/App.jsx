import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from './contactForm/ContactForm';

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  createContact = (state) => {
    const newContact = {
      name: state.name,
      id: nanoid(),
    }
    this.setState((prev) => ({
      ...state,
      contacts: [newContact, ...state.contacts],
    }))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.createContact(this.state)
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value })
  };

  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value="{this.state.name}" />

        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
      </div>
    )
  }
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: ''
//   }



//   createNumber = (state) => {
//     const newNumber = {
//       number: state.number,
//       id: nanoid(),
//     }
//     this.setState((prev) => ({
//       ...state,
//       contacts: [newNumber, ...state.contacts],
//     }))
//   }



//

//   render() {

//     return (
//       <div style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}>

//         <form onSubmit={this.handleSubmit}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             border: '2px solid black',
//             padding: '30px'
//           }}>
//           <label style={{
//             fontSize: '30px'
//           }}
//           >Name</label>
//           <input
//             style={{
//               height: '20px',
//               marginTop: '10px',
//             }}
//             value={this.state.name}
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label style={{
//             fontSize: '30px',
//             marginTop: '20px'
//           }}
//           >Number</label>
//           <input
//             style={{
//               height: '20px',
//               marginTop: '10px',
//             }}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <button style={{
//             height: '30px',
//             width: '120px',
//             marginTop: '50px',
//             cursor: 'pointer'
//           }}
//             type='submit'>
//             add contact
//           </button>
//         </form>
//         <p>Contacts</p>
//         <ul>
//           {this.state.contacts.map(c => <li>{c.name}:</li>)}
//         </ul>
//       </div>
//     );
//   }
// }
