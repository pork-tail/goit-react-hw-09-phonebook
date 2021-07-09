import React from "react";
import styles from "./ContactList.module.css";
import { removeContacts } from "../../redux/contacts/contacts.operations";
import { filteredItemsSelector } from "../../redux/contacts/contacts.selector";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const items = useSelector(filteredItemsSelector);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(removeContacts(id));

  return (
    <ul className={styles.ul}>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.textContent}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.deleteContact}
            type="button"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
