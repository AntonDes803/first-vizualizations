import ContactsSection from "@/sections/contactsSection/ContactsSection";
import { getDictionary } from "@/helpers/getDictionary";

const ContactsPage = async ({ params }) => {
  const { lang } = await params;
  const { contactsSection } = await getDictionary(lang);

  return (
    <>
      <ContactsSection lang={lang} dictionary={contactsSection} />
    </>
  );
};

export default ContactsPage;
