import React from 'react';
import css from "./ContactForm.module.css";

export default function ContactForm({onSubmit, value, onChange}) {
  return (
    <div className={css.formContainer}>

      <form
        className={css.form}
        onSubmit={onSubmit}>
        <label className={css.nameLabel}>Name</label>
        <input
          className={css.inputName}
          value={value}
          onChange={onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.numberLabel}>Number</label>
        <input
          className={css.inputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          className={css.buttonAdd}
          type='submit'>
          add contact
        </button>
      </form>
      {/* <p>Contacts</p>
      <ul>
        {this.state.contacts.map(
          c => <li>{c.name}:</li>
        )}
      </ul> */}
    </div>
  )
}
