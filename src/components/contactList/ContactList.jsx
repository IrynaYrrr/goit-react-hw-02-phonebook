import React, { Component } from "react";

export class ContactList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.filter((el) => el.name.toLowerCase().includes(this.props.filter.toLowerCase())).map(
            c =>
              <li key={c.id}>{c.name}:{c.number}
                <div>
                  <button onClick={() => this.props.handleDelete(c.id)}>
                    Delete
                  </button>
                </div>
              </li>
          )}
        </ul>
      </div>
    )
  }
}
