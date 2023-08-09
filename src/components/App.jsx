import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  handleSubmitForm = (value) => {
    const newContact = {
          number: value.number,
          name: value.name,
          id: nanoid(),
        }
    this.setState((prev) => ({
      ...this.state,
      contacts: [newContact, ...this.state.contacts],
    }))
  }

  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={values => this.handleSubmitForm(values)}
        />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
}
