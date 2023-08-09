import React, { Component } from "react";

export class ContactList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.filter((el) => el.name.toLowerCase().includes(this.props.filter.toLowerCase())).map(
            c => <li>{c.name}:{c.number}</li>
          )}
        </ul>
      </div>
    )
  }
}
