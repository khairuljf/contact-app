import { contact } from "./types";

export type contactDetailsProps = {
  contacts: contact[];
  contactId: string | undefined;
};

export default function ContactDetails({
  contactId,
  contacts,
}: contactDetailsProps) {
  const contactInfo = contacts.find((contact) => contact?.id === contactId);

  return (
    <div className="details-wrap">
      <div>
        ContactDetails {contactId} {contactInfo?.name}{" "}
      </div>
    </div>
  );
}
