const emailSent = props => {
  return (
    <div className="w-2/3 text-center mt-4">
      <p className="text-2xl font-bold text-center text-red-light">
        Thank you for your message! <br />
      </p>
      <p className="mt-8 text-center font-bold">
        A representative will reach out to you shortly.
      </p>
      <p
        onClick={() => props.refreshEmailForm()}
        className="text-base mt-8 mx-auto w-200 mb-8 p-3 px-3 rounded hover:bg-grey hover:text-white cursor-pointer bg-red-dark text-white "
      >
        Send New Message
      </p>
    </div>
  );
};
export default emailSent;
