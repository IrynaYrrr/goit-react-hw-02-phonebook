import React, { Component } from "react";

export class ContactList extends Component {

  render() {
    return (
      <div>
        <p>Contacts</p>
        <ul>
          {this.props.contacts.map(
            c => <li>{c.name}:{c.number}</li>
          )}
        </ul>
      </div>
    )
  }
}
