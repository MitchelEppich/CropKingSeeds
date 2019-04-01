const ratings = props => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(
      <img
        key={i}
        src={props.misc.CFURL + "/icon/crownicon_inv.png"}
        className="w-8"
      />
    );
  }
  return arr;
};
export default ratings;
