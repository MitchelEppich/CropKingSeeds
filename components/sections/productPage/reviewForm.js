import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const reviewForm = props => {
    let _review = props.viewProduct.review;
    let reviewIcons = [];
    for (let i = 0; i < 5; i++) {
        reviewIcons.push(
            <span
                key={i}
                id="rating"
                onClick={e => {
                    let review = _review;
                    let key = "rating";
                    let value = i + 1;

                    props.modifyReview({ key, value, review });
                }}>
                <span>
                    <img
                        src="../../static/img/CrownIcon.svg"
                        className={`
          ${
              _review.rating > i
                  ? "cursor-pointer h-8 w-8 crown-icon text-red-dark"
                  : "cursor-pointer h-8 w-8 crown-icon text-red-dark opacity-25"
          } `}
                    />
                </span>
                {/* <FontAwesomeIcon
          key={i}
          icon={faCannabis}
          className={`fa-2x
          ${
            _review.rating > i
              ? "cursor-pointer text-red-dark mx-1"
              : "cursor-pointer text-red-dark mx-1 opacity-25"
          } `}
        /> */}
            </span>
        );
    }

    return (
        <form
            className="min-h-300 my-2 mb-12 w-container sm:w-full sm:px-4 mx-auto"
            onSubmit={e => {
                e.preventDefault();
                let review = `${_review.name != null && _review.name != "" ? _review.name : "Customer"}/&=>${
                    _review.email
                }/&=>${_review.body}/&=>${_review.rating}`;

                props.updateStrain({
                    review,
                    sotiId: props.viewProduct.currentProduct.sotiId
                });
                props.modifyReview({ clear: true });
            }}>
            <div className="w-full inline-flex sm:block justify-between">
                <div className="w-1/2 sm:w-full mr-2">
                    <input
                        className="w-full h-12 my-2 pl-2"
                        placeholder="Name (optional)"
                        id="name"
                        value={_review.name || ""}
                        onChange={e => {
                            let review = _review;
                            let _target = e.target;
                            let key = _target.id;
                            let value = _target.value;

                            props.modifyReview({ key, value, review });
                        }}
                    />
                </div>
                <div className="w-1/2 sm:w-full ml-2 sm:ml-0">
                    <input
                        className="w-full h-12 my-2 pl-2"
                        placeholder="Email"
                        required
                        id="email"
                        type="email"
                        name="email"
                        value={_review.email || ""}
                        onChange={e => {
                            let review = _review;
                            let _target = e.target;
                            let key = _target.id;
                            let value = _target.value;
                            props.modifyReview({ key, value, review });
                            e.target.setCustomValidity("");
                        }}
                        onInvalid={e => {
                            e.target.setCustomValidity('Must be valid email and should contain "@"');
                        }}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$"
                    />
                    {/* <input
                        type="email"
                        name="email"
                        required="required"
                        className="p-2 w-full h-10 rounded-tr rounded-br"
                        value={props.misc.newsletterEmail || ""}
                        placeholder="Email address"
                        onChange={e => {
                            let value = e.target.value;
                            props.setEmail({ email: value });
                            e.target.setCustomValidity("");
                        }}
                        onInvalid={e => {
                            e.target.setCustomValidity('Must be valid email and should contain "@"');
                        }}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$"
                    /> */}
                </div>
            </div>
            <div className="w-full">
                <textarea
                    placeholder={"What did you think about " + props.viewProduct.currentProduct.name + "?"}
                    required
                    id="body"
                    maxLength="250"
                    value={_review.body || ""}
                    onChange={e => {
                        let review = _review;
                        let _target = e.target;
                        let key = _target.id;
                        let value = _target.value;

                        props.modifyReview({ key, value, review });
                    }}
                    className="w-full p-2 sm:p-2 h-200 my-2 mx-auto"
                />
            </div>
            <div className="w-full inline-flex sm:block md:block">
                <div className="w-3/5 sm:w-full md:w-full md:mx-0 content-center flex mx-2 mt-2">
                    <p className="flex items-center mr-2 text-sm font-bold sm:text-sm sm:mx-auto">
                        {" "}
                        <span className="text-base text-grey-light opacity-75 font-bold mr-2">Select here:</span>{" "}
                        {reviewIcons}
                    </p>
                </div>
                <div className="w-2/5 sm:w-full justify-end mr-auto flex md:w-full md:justify-center">
                    <div />
                    <button
                        className={`w-1/2 sm:w-full sm:mt-6 md:w-full md:mt-4 p-2 mt-2 text-xl hover:bg-red-light bg-red-dark text-lg text-white rounded cursor-pointer ${
                            _review.rating == null ? "opacity-50 unselectable pointer-events-none" : ""
                        }`}
                        type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};
export default reviewForm;
