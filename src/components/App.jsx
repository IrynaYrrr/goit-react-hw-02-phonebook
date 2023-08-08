import React, { Component } from "react";
import { nanoid } from "nanoid";



export class App extends Component {
  state = {
    contacts: [],
    name: ''
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
    console.log(state);
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value })
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.createContact(this.state)
  };

  render() {
    const { name } = this.state;

    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>

        <form onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '2px solid black',
            padding: '30px'
          }}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button style={{
            height: '30px',
            marginTop: '20px',
            cursor: 'pointer'
          }}
            type='submit'>
            add contact
          </button>
        </form>
        <p>Contacts</p>
        <ul>
          {this.state.contacts.map(c => <li>{c.name}</li>)}
        </ul>
      </div>
    );
  }
}
