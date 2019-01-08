import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const reviewForm = props => {
    let reviewIcons = [];
    for (let i = 0; i < 5; i++) {
        reviewIcons.push(
            <FontAwesomeIcon
                key={i}
                icon={faCannabis}
                onMouseEnter={() => props.setNewRating(i)}
                className={
                    props.viewProduct.newRating >= i
                        ? " cursor-pointer text-red-dark fa-2x mx-1"
                        : " cursor-pointer text-grey-dark fa-2x mx-1"
                }
            />
        );
    }

    return (
        <form className="min-h-300 my-2 mb-8 xl:w-700 w-300 flex flex-wrap mx-auto">
            <div className="w-full mx-auto flex flex-wrap justify-between">
                <input className="w-full h-12 text-xl my-2 pl-2" placeholder="Name (optional)" />
                <input className="w-full h-12 text-xl my-2 pl-2" placeholder="Email" />
            </div>
            <textarea
                placeholder={"What did you think about " + props.viewProduct.currentProduct.name + "?"}
                className="w-full p-4 h-200 my-2 mx-auto"
            />
            <div className="w-1/3 content-center flex justify-around mx-auto mt-4">{reviewIcons}</div>
            <input
                className="w-1/3 mx-auto h-12 mt-2 hover:bg-red-dark bg-red-light text-white cursor-pointer"
                type="submit"
            />
        </form>
    );
};
export default reviewForm;
