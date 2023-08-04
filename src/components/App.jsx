import React, { Component } from "react";
import { nanoid } from "nanoid";



export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  nameInputId = nanoid();

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div style={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>

        <form style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: '2px solid black',
          padding: '30px'
        }}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            id={this.nameInputId}
            value={inputValue}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type='submit'>Add contact</button>
        </form>
        <p>Contacts</p>
      </div>
    );
  }
}
