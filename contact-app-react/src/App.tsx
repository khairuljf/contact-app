import { useEffect, useId, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/contacts";
import AddContactForm from "./components/AddContact";
import Contact from "./components/Contact";
import { contact } from "./components/types";
import "./index.css";
import EditContactForm from "./components/EditContact";

function App() {
  const id = useId();

  const [contacts, setContacts] = useState<contact[]>([]);
  const [filter, setFilter] = useState("");
  const [contactId, setContactId] = useState<string>();

  // Filter contact by name

  let filterContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
  });

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

  // Delete contact
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
              contacts={filterContact}
              setContactId={setContactId}
              contactId={contactId}
              filterContact={setFilter}
              deleteContact={deleteContact}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContactForm setContacts={setContacts} />}
        />
        <Route
          path="/edit"
          element={
            <EditContactForm contacts={contacts} setContacts={setContacts} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
