import { useEffect, useId, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/contacts";
import AddContactForm from "./components/AddContact";
import Contact from "./components/Contact";
import { contact } from "./components/types";
import "./index.css";

function App() {
  const id = useId();

  const [contacts, setContacts] = useState<contact[]>([]);
  const [contactId, setContactId] = useState<string>();

  const filterContact = (name: string) => {
    console.log(name);

    const filterContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    setContacts(filterContact);
  };

  // Retrieve contacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContact = async () => {
      const allContact = await retriveContacts();

      if (allContact) {
        setContacts((prevState) => allContact);
      }
    };

    getAllContact();
  }, []);

  return (
    <div className="app-wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <Contact
              contacts={contacts}
              setContactId={setContactId}
              contactId={contactId}
              filterContact={filterContact}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContactForm setContacts={setContacts} />}
        />
        <Route
          path="/edit/:contactId"
          element={<AddContactForm setContacts={setContacts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
