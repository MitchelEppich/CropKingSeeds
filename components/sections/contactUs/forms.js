let Recaptcha = require("react-recaptcha");

const Forms = props => {
    // var callback = () => {
    //     grecaptcha.execute("6LfaeIgUAAAAADYLe6wYQagF0aclHtGG0gjY4OCr", { action: "action_name" }).then(function(token) {
    //         // Verify the token on the server.
    //     });
    // });
    return (
        <div // style={{ background: "#26413C" }}
            className="w-full pt-32 -mt-12 bg-grey-lightest mb-12 pb-12">
            <form>
                <div className="w-container mx-auto p-2">
                    <p className="p-4 text-grey font-extrabold text-3/5xl">Contact Form</p>
                    <div className="inline-flex w-full mt-4">
                        <div className="w-1/2 mr-2 text-center">
                            <input type="text" name="" id="" placeholder="Full Name:" className="p-3 w-full" />
                        </div>
                        <div className="w-1/2 ml-2 text-center">
                            <input type="text" name="" id="" placeholder="Email:" className="p-3 w-full " />
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <div className="w-full text-center">
                            <select className="p-3 w-full">
                                <option className="p-3">Select Here...</option>
                                <option className="p-3">Suggestion</option>
                                <option className="p-3">Doubts</option>
                                <option className="p-3">Complain</option>
                                <option className="p-3">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <div className="w-full text-center">
                            <textarea defaultValue="Your message here..." cols="40" rows="10" className="p-3 w-full" />
                        </div>
                    </div>
                    <div className="w-full flex justify-end mt-4">
                        <div className=" font-bolder mr-12">
                            {/* <Recaptcha
                                sitekey="6LfaeIgUAAAAADYLe6wYQagF0aclHtGG0gjY4OCr"
                                render="explicit"
                                onloadCallback={callback}
                            /> */}
                        </div>
                        <button className="p-3 bg-grey-light hover:bg-red-dark text-white">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Forms;
