import ContactForm from "./contactform";

const ContactUs = props => {
  return (
    <div className="w-full p-2 pb-12">
      <div className="w-container mx-auto md:w-full sm:w-full lg:w-full">
        <h1 className="text-3/5xl md:text-3xl sm:text-3xl text-center w-full font-extrabold p-2">
          Have a question or comment?
        </h1>
        <p className="p-2 px-8 md:px-2 sm:px-2 mx-auto md:w-full sm:w-full w-container text-lg font-bold text-center">
          We provide full support worldwide to address any questions or comments
          you may have. Please view our{" "}
          <span className="text-red">FAQ Page</span> to see if we have answered
          your question(s) already!
        </p>
      </div>

      <ContactForm {...props} />
    </div>
  );
};

export default ContactUs;
