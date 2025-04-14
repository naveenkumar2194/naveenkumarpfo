import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-1/2">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
