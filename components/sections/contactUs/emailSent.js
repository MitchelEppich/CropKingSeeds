const emailSent = props => {
  return (
    <p className="text-2xl font-bold w-2/3 text-left">
      Thank you for your message! <br />A representative will reach out to you
      shortly.
      <span
        onClick={() => props.refreshEmailForm()}
        className="text-base absolute pin-b mb-4 ml-8 border p-3 px-3 rounded-tl-lg hover:bg-grey hover:text-white slow cursor-pointer rounded-br-lg border-grey-light"
      >
        Send New Message
      </span>
    </p>
  );
};
export default emailSent;
