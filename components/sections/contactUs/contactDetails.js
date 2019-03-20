import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactDetails = props => {
  return (
    <div className="absolute sm:w-full sm:relative md:w-full md:relative overflow-hidden sm:pin md:pin my-auto pin-r pin-y w-350 h-500 sm:h-full sm:border sm:border-grey-lightest md:border md:border-grey-lightest md:mt-8 md:pt-0 sm:pt-0 sm:mt-8 sm:pb-4 xxl:shadow-lg xl:shadow-lg lg:shadow-lg bg-white -mr-20 md:rounded-lg sm:rounded-lg">
      <div className="bg-red-dark text-center text-white py-2 p-1">
        <h2 className="p-3 py-0 text-3xl font-extrabold">Contact us</h2>
        <p className="text-white font-bold">24 hour customer service</p>
      </div>
      <div className="bg-white p-2 px-6 md:px-3 sm:px-2">
        <div className="inline-flex mt-4 items-center w-full flex">
          <FontAwesomeIcon
            icon={faPhone}
            className="fa-2x sm:p-1 mr-2 text-grey opacity-25"
          />
          <p className="p-2 text-2xl font-black">Phone</p>
        </div>
        <div className="ml-10 pl-1">
          <p className="p-1 pb-2">
            <span className="font-extrabold">Canada:</span> (604) 563-0291
          </p>
          <p className="p-1 pb-2">
            <span className="font-extrabold">USA:</span> +1 (844) 276-7546
          </p>
          <p className="p-1 pb-2">
            <span className="font-extrabold">Worldwide:</span> +1 (604) 563-0291
          </p>
        </div>
        <div className="inline-flex mt-4 items-center w-full flex">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-2x mr-2 sm:p-1 text-grey opacity-25"
          />
          <p className="p-2 text-2xl font-black">Email</p>
        </div>
        <div className="ml-10 pl-1">
          <p className="p-1 pb-2">info@cropkingseeds.com</p>
        </div>
        <div
          onClick={() => {
            document.getElementById("tawkto").click();
            props.refreshEmailForm();
          }}
          className="w-full text-center mt-10 relative scale-item cursor-pointer sm:my-4 md:my-4"
        >
          <div className="w-full relative">
            <img
              alt="CKS-Chat-Logo"
              style={props.styleLogoKing}
              src={props.misc.CFURL + "/logos/cks-logo-header.png"}
              className="w-32"
            />
          </div>
          <div className="absolute -mb-2 pin-b w-full mx-auto">
            <h3 className="bg-red-dark w-main rounded px-4 text-sm mx-auto shadow-md text-white uppercase p-2 hover:bg-red-light">
              Chat with the king
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactDetails;
