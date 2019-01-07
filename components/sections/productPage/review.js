import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {

} from "@fortawesome/free-brands-svg-icons";


const review = props => {
  let ratings = [];
  for (let i = 0; i < props.rating; i++) {
    ratings.push(
      <FontAwesomeIcon key={i} icon={faCannabis} className="text-red-dark fa-lg mx-1" />
    )
  }
  return (
    <div className="my-2 flex">
      <img src={props.image} className="h-24" />
      <div className="px-4 pt-8"><p className="font-bold text-xl mb-1">{props.name}</p>{ratings}</div>
      <p className="w-2/3">{props.comment}</p>
    </div>
  )
}

export default review;