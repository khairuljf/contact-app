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

  const deleteContact = async (id: string) => {
    const newContact = contacts?.filter((contact) => contact?.id !== id);
    try {
      const response: { data: contact } = await api.delete(`/contacts/${id}`);
      console.log("res", response);
      if (response.data) {
        setContacts(newContact);
      }
    } catch (error) {
      // Handle errors from the API call
      console.error("Error while making the API call:", error);
    }
  };

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
              deleteContact={deleteContact}
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
