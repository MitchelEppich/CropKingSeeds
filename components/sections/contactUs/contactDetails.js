import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const contactDetails = props => {
  return (
    <div className="absolute sm:w-full sm:relative md:w-full md:relative overflow-hidden sm:pin md:pin my-auto pin-r pin-y w-350 h-650 sm:h-full sm:border sm:border-grey-lightest md:border md:border-grey-lightest md:mt-8 md:pt-0 sm:pt-0 sm:mt-8 sm:pb-4 xxl:shadow-lg xl:shadow-lg lg:shadow-lg bg-white -mr-20 md:rounded-lg sm:rounded-lg">
      <div className="bg-red-dark text-center text-white py-2 p-1">
        <h2 className="p-3 py-0 text-3xl font-bold">Contact Us</h2>
        <p className="text-white font-bold">24 Hour Customer Service</p>
      </div>
      <div className="bg-white p-2 px-6 md:px-3 sm:px-2">
        <div className="inline-flex mt-4 items-center w-full flex">
          <FontAwesomeIcon
            icon={faPhone}
            className="fa-lg sm:pl-1 mr-2 text-grey opacity-25"
          />
          <p className="p-2 text-2xl font-black">Phone</p>
        </div>
        <div className="ml-8 sm:ml-2 pl-1">
          <p className="p-1 pb-2">
            <span className="font-bold">Canada:</span> (604) 563-0291
          </p>
          <p className="p-1 pb-2">
            <span className="font-bold">USA:</span> +1 (844) 276-7546
          </p>
          <p className="p-1 pb-2">
            <span className="font-bold">Worldwide:</span> +1 (604) 563-0291
          </p>
        </div>
        <div className="inline-flex mt-4 items-center w-full flex">
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="fa-lg mr-1 sm:pl-1 text-grey opacity-25"
          />
          <p className="p-2 text-2xl font-black">Address</p>
        </div>
        <div className="ml-8 sm:ml-2 pl-1">
          <p className="p-1 pb-2">
            <a
              rel="nofollow"
              className="text-grey hover:text-red"
              href="https://www.google.com/maps/place/Crop+King+Seeds/@49.2654314,-123.1044603,17z/data=!3m1!4b1!4m5!3m4!1s0x54867179a37894c5:0xc364e7db6fbefbc2!8m2!3d49.2654279!4d-123.1022716"
            >
              <span className="block">112 E 6th Ave,</span>
              <span className="block">Vancouver, BC V5T 1J5</span>
              <span className="block">Canada</span>
            </a>
          </p>
        </div>
        <div className="inline-flex mt-4 items-center w-full flex">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-lg mr-2 sm:pl-1 text-grey opacity-25"
          />
          <p className="p-2 text-2xl font-black">Email</p>
        </div>
        <div className="ml-8 sm:ml-2 pl-1">
          <p className="p-1 pb-2">
            <a
              rel="nofollow"
              className="text-grey hover:text-red"
              href="mailto:info@cropkingseeds.com"
            >
              info@cropkingseeds.com
            </a>
          </p>
        </div>
        <div
          onClick={() => {
            document.getElementById("tawkto").click();
            props.refreshEmailForm();
          }}
          className="w-full text-center mt-4 relative scale-item cursor-pointer sm:my-4 md:my-4"
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
