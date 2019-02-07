import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const question = props => {
    let currentlyExpanded = props.faq.currentlyExpanded;
    let expand = currentlyExpanded == props.index;
    let size = expand
        ? {
              height: "auto",
              transition: "all 0.2s ease-in-out",
              backgroundColor: "#FDFDFD"
          }
        : {
              height: "auto",
              transition: "all 0.2s ease-in-out",
              backgroundColor: "#FAFAFA"
          };
    let answer;
    if (typeof props.answer == "string") {
        // console.log(props.answer);
        answer = props.answer;
    } else {
        answer = props.answer.map((value, index) => {
            return (
                <p key={index} className="my-1">
                    {value}
                </p>
            );
        });
    }
    // console.log(typeof props.answer);
    return (
        <div
            onClick={() => props.toggleFAQQuestion(props.index)}
            style={size}
            className="w-1/2 lg:w-full md:w-full sm:w-full mx-auto shadow my-3 cursor-pointer">
            <p className="font-black p-2 flex justify-between">
                <span className={expand ? "text-red-dark flex items-center" : " flex items-center"}>
                    <span className="text-red-dark text-2xl mr-2">Q:</span>
                    <span>{props.question}</span>
                </span>
                {expand ? (
                    <FontAwesomeIcon icon={faCaretUp} className="fa-2x mx-2 mt-1" />
                ) : (
                    <FontAwesomeIcon icon={faCaretDown} className="fa-2x mx-2 mt-1" />
                )}
            </p>
            {expand ? <div className="px-10 pb-8">{answer}</div> : null}
        </div>
    );
};

export default question;
