import React from "react";
import { Link } from "react-router-dom";
import { contact } from "./types";

export type contacts = {
  contacts: contact[];
  setContactId: React.Dispatch<React.SetStateAction<string | undefined>>;
  filterContact: (name: string) => void;
};

export default function ContactList({
  contacts,
  setContactId,
  filterContact,
}: contacts) {
  return (
    <div className="contact-list">
      <div className="search">
        <input
          type="text"
          placeholder="Search contact"
          onChange={(e) => {
            filterContact(e.target.value);
          }}
        />
        <Link to={"/add/"}>Add Contact</Link>
      </div>
      <div className="contacts">
        <ul>
          {contacts?.map((contact: contact, index) => {
            return (
              <li
                onClick={(e) => {
                  console.log(e.target);
                  setContactId((prevState) => contact?.id);
                }}
                key={index}
              >
                {contact?.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
