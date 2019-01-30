import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = props => {
    return (
        <div className="w-full p-2 mt-10">
            <div
                style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.18)" }}
                className="w-700 sm:w-full sm:px-2 lg:w-600 md:w-full lg:px-2 md:px-2 md:pt-0 h-600 sm:h-full md:h-full md:px-2 xxl:mx-auto xl:mx-auto px-8 relative rounded-lg p-2">
                <div className="w-full p-2">
                    <h2 className="font-extrabold text-3xl md:text-2xl sm:text-2xl p-2 mt-4">Send us a message</h2>
                    <p className="text-sm p-1 px-2">
                        <span className="text-red">*</span> Indicates required field
                    </p>
                </div>
                <div className="p-2 w-full">
                    {!props.misc.emailSent ? (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                const form = event.target;
                                const formData = new window.FormData(form);

                                props.sendEmail({
                                    name: formData.get("name"),
                                    body: formData.get("body"),
                                    email: formData.get("email"),
                                    subject: formData.get("subject")
                                });

                                form.reset();
                            }}>
                            <div className="w-500 lg:w-400 md:w-full sm:w-full">
                                <div className="w-main sm:w-full md:w-full mt-3 p-1">
                                    <label className="p-1 font-bold">
                                        Full Name: <span className="text-red">*</span>
                                    </label>{" "}
                                    <input type="text" name="name" className="p-2 my-1 w-full" />
                                </div>
                                <div className="w-main sm:w-full md:w-full mt-3 p-1">
                                    <label className="font-bold">
                                        Email Address: <span className="text-red">*</span>
                                    </label>{" "}
                                    <input type="text" name="email" className="p-2 my-1 w-full" />
                                </div>
                                <div className="w-main sm:w-full md:w-full mt-3 p-1">
                                    <label className="font-bold">Subject:</label>
                                    <select className="p-2 w-full my-1" name="subject">
                                        <option className="p-2" value="Shipping/Delivery">
                                            Shipping/Delivery
                                        </option>
                                        <option className="p-2" value="Payments">
                                            Payments
                                        </option>
                                        <option className="p-2" value="Ordering Online">
                                            Ordering Online
                                        </option>
                                        <option className="p-2" value="Account Information">
                                            Account Information
                                        </option>
                                        <option className="p-2" value="Privacy/Security">
                                            Privacy/Security
                                        </option>
                                        <option className="p-2" value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                                {/* <div className="w-2/3 mt-3 p-1">
                <label className="p-2">Order Number:</label>{" "}
                <input type="text" className="p-2 my-1 w-full" />
              </div> */}
                                <div className="w-main sm:w-full md:w-full mt-3 p-1">
                                    <label className="font-bold">Message:</label>{" "}
                                    <textarea name="body" cols="20" row="500" className="p-2 my-1 w-full h-40" />
                                </div>
                                <div className="w-main sm:w-full md:w-full flex justify-end">
                                    <div className="w-200 sm:w-full md:w-full md:justify-center flex justify-end">
                                        <button
                                            type="submit"
                                            className="p-2 sm:p-3 md:p-3 px-4 w-150 sm:w-full md:w-full text-lg uppercase font-bold text-white rounded bg-red-dark hover:bg-red-light">
                                            Submit
                                        </button>
                                        {/* <div className=" font-bolder mr-12">
                    <Recaptcha
                                sitekey="6LfaeIgUAAAAADYLe6wYQagF0aclHtGG0gjY4OCr"
                                render="explicit"
                                onloadCallback={callback}
                            /> 
                  </div> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <p className="text-2xl font-bold w-2/3 text-left">
                            Thank you for your message! <br />A representative will reach out to you shortly.
                            <span
                                onClick={() => props.refreshEmailForm()}
                                className="text-base absolute pin-b mb-4 ml-8 border p-3 px-3 rounded-tl-lg hover:bg-grey hover:text-white slow cursor-pointer rounded-br-lg border-grey-light">
                                send new message
                            </span>
                        </p>
                    )}
                    <div
                        style={{ right: "-145px" }}
                        className="absolute sm:w-full sm:relative md:w-full md:relative overflow-hidden sm:pin md:pin my-auto pin-r pin-y w-350 h-500 sm:border-t-2 sm:border-grey-lightest md:border-t-2 md:border-grey-lightest md:mt-8 md:pt-8 sm:pt-8 sm:mt-8 xxl:shadow-lg xl:shadow-lg lg:shadow-lg bg-white">
                        <div className="bg-red-dark text-center text-white py-2 p-1 sm:rounded md:rounded">
                            <h2 className="p-3 py-0 text-3xl font-extrabold">Contact us</h2>
                            <p className="text-white font-bold">24 hour customer service</p>
                        </div>
                        <div className="bg-white p-2 px-6 md:px-3">
                            <div className="inline-flex mt-4 items-center w-full flex">
                                <FontAwesomeIcon icon={faPhone} className="fa-2x mr-2 text-grey opacity-25" />
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
                                <FontAwesomeIcon icon={faEnvelope} className="fa-2x mr-2 text-grey opacity-25" />
                                <p className="p-2 text-2xl font-black">Email</p>
                            </div>
                            <div className="ml-10 pl-1">
                                <p className="p-1 pb-2">info@cropkingseeds.com</p>
                            </div>
                            <div id="tawkto" className="w-full text-center mt-10 relative scale-item cursor-pointer">
                                <div className="w-full relative">
                                    <img src="../../static/img/cks_red.png" className="w-32" />
                                </div>
                                <div className="absolute -mb-2 pin-b w-full mx-auto">
                                    <h3 className="bg-red-dark w-main rounded px-4 text-sm mx-auto shadow-md text-white uppercase font-bold p-2">
                                        Chat with the king
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
