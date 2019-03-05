import Name from "./name";
import GeneLabel from "./geneLabel";
import CrownRating from "./crownRating";
import ExtraData from "./extraData";

const details = props => {
  return (
    <React.Fragment>
      <Name {...props} hover={props.hover} />
      <GeneLabel hover={props.hover} {...props} />
      <CrownRating hover={props.hover} {...props} />
      <ExtraData hover={props.hover} {...props} />
    </React.Fragment>
  );
};

export default details;
