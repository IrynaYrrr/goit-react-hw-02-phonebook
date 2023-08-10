import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

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
    this.setState(() => ({
      ...this.state,
      contacts: [newContact, ...this.state.contacts],
    }))
  }

  handleFilterChange = (value) => {
    this.setState(() => ({
      ...this.state,
      filter: value,
    }))
  }

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
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
        <Filter
          onChange={value => this.handleFilterChange(value)}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}
