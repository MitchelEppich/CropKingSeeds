import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const review = props => {
    let ratings = [];
    for (let i = 0; i < props.rating; i++) {
        ratings.push(<FontAwesomeIcon key={i} icon={faCannabis} className="text-red-dark fa-lg mx-1" />);
    }
    return (
        <div className="my-2 flex justify-center">
            <div className="pr-4 pt-2 w-1/4">
                <p className="font-bold text-xl mb-1">{props.name}</p>
                {ratings}
            </div>
            <p className="w-3/4 text-justify">{props.comment}</p>
        </div>
    );
};

export default review;
