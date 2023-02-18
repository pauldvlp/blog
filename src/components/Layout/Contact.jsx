import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Heading from "../Elements/Heading";
import { ContactProvider } from "@/context/ContactContext";

const Contact = () => {
  return (
    <ContactProvider>
      <section
        id="contact"
        className="max-w-xl p-4 mx-auto scroll-mt-16 sm:scroll-mt-24 grid gap-12 mb-12"
      >
        <Heading>Contáctame.</Heading>
        <ContactForm />
      </section>
    </ContactProvider>
  );
};

export default Contact;
