import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

const headersStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "orange",
  color: "white",
  textAlign: 'center',
};

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
    if (this.state.contacts.find((item) => item.name === value.name)) {
      alert(`${value.name} is already in contacts`);
    } else {
      this.setState(() => ({
        ...this.state,
        contacts: [newContact, ...this.state.contacts],
      }))
    }
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
        <h1 style={headersStyles}>Phonebook</h1>
        <ContactForm
          onSubmit={values => this.handleSubmitForm(values)}
        />
        <h2 style={headersStyles}>Contacts</h2>
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
