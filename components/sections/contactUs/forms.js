const Forms = props => {
  return (
    <div // style={{ background: "#26413C" }}
      className="w-full pt-32 -mt-12 bg-grey-lightest mb-12 pb-12">
      <form>
        <div className="w-container mx-auto p-2">
          <p className="p-4 text-grey font-extrabold text-3/5xl">
            Contact Form
          </p>
          <div className="inline-flex w-full mt-4">
            <div className="w-1/2 mr-2 text-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name:"
                className="p-3 w-full"
              />
            </div>
            <div className="w-1/2 ml-2 text-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Email:"
                className="p-3 w-full "
              />
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
              </select>{" "}
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="w-full text-center">
              <textarea cols="40" rows="10" className="p-3 w-full">
                Fugiat ut id quis eu irure ex. Consectetur tempor ut aliqua
                exercitation. Tempor ad deserunt pariatur anim id. Consequat non
                nostrud officia velit duis veniam labore veniam dolor dolore.
                Fugiat reprehenderit ipsum aute minim voluptate esse dolor aute
                aute sunt cillum mollit. Nostrud nostrud anim et et ea quis
                velit dolore occaecat aute qui. Consequat do commodo qui
                reprehenderit laboris velit Lorem excepteur eu ipsum aliquip
                Lorem qui.
              </textarea>
            </div>
          </div>
          <div className="w-full flex justify-end mt-4">
            <div className=" font-bolder mr-12">
              <input
                type="text"
                className="font-bolder p-3"
                placeholder="Captcha"
              />
            </div>
            <button className="p-3 bg-grey-light hover:bg-red-dark text-white">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;
