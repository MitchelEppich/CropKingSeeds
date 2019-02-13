const ratings = props => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(
      <img key={i} src="../../static/img/CrownIcon_Inv.png" className="w-8" />
    );
  }
  return arr;
};
export default ratings;
