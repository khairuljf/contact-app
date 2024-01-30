import { Button } from "antd";
import { contact } from "./types";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import api from "../api/contacts";
import { useEffect, useState } from "react";

export type contactDetailsProps = {
  contactId: string | undefined;
  deleteContact: (id: string) => void;
};

export default function ContactDetails({
  contactId,
  deleteContact,
}: contactDetailsProps) {
  const navigate = useNavigate();

  const [contactDetails, setContactDetails] = useState<contact | null>(null);

  const getContactDetails = async (contactId: string) => {
    try {
      const response = await api.get(`/contacts/${contactId}`);

      if (response.data) {
        setContactDetails(response.data);
      } else {
        throw new Error("Contact not found");
      }
    } catch (error) {
      // Handle errors from the API call
      console.error("Error while making the API call:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (contactId) getContactDetails(contactId as string);

    //
  }, [contactId]);

  if (!contactDetails) {
    return null;
  }

  return (
    <div className="details-wrap">
      <div className="contact-details">
        <h1 className="title">Contact Details</h1>
        <div className="username">
          Name : {contactId} {contactDetails?.name}{" "}
        </div>
        <div className="phone"></div>
        <div className="email">Email : {contactDetails?.email}</div>
      </div>
      <div className="action-contact">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => {
            navigate("/edit", {
              state: { contact: contactDetails },
            });
          }}
        >
          Edit
        </Button>
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          danger
          onClick={() => deleteContact(contactDetails?.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
