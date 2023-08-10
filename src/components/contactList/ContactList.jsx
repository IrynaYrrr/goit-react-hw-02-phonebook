import React, { Component } from "react";
import css from "./ContactList.module.css";


export class ContactList extends Component {

  render() {
    return (
      <div className={css.contactsWrap}>
        <ul>
          {this.props.contacts.filter((el) => el.name.toLowerCase().includes(this.props.filter.toLowerCase())).map(
            c =>
              <li className={css.contactItem} key={c.id}>
                <div>{c.name}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{c.number}</div>
                <div>
                  <button className={css.btnDelete}
                  onClick={() => this.props.handleDelete(c.id)}>
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
