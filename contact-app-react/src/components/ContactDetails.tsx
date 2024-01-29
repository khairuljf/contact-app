import { Button } from "antd";
import { contact } from "./types";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export type contactDetailsProps = {
  contacts: contact[];
  contactId: string | undefined;
  deleteContact: (id: string) => void;
};

export default function ContactDetails({
  contactId,
  contacts,
  deleteContact,
}: contactDetailsProps) {
  const contactInfo = contacts.find((contact) => contact?.id === contactId);

  if (!contactInfo) {
    return null;
  }

  return (
    <div className="details-wrap">
      <div className="contact-details">
        <h1 className="title">Contact Details</h1>
        <div className="username">
          Name : {contactId} {contactInfo?.name}{" "}
        </div>
        <div className="phone"></div>
        <div className="email">Email : {contactInfo?.email}</div>
      </div>
      <div className="action-contact">
        <Button
          type="primary"
          icon={<EditOutlined />}

          // onClick={() => enterLoading(1)}
        >
          Edit
        </Button>
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          danger
          onClick={() => deleteContact(contactInfo?.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
