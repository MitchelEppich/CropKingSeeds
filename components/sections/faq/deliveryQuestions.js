import Question from "./question";

const index = props => {
  let questions = props.faq.questions;
  questions = questions.filter(q => {
    if (props.faq.searchValue == null) return true;
    if (
      !JSON.stringify(q)
        .toLowerCase()
        .includes(props.faq.searchValue.toLowerCase())
    )
      return false;
    return true;
  });
  let deliveryQuestions = questions.slice(0, 3).map((question, index) => {
    return <Question key={index} index={index} {...question} {...props} />;
  });
  return (
    <React.Fragment>
      <h2
        id="delivery"
        className="w-1/2 xl:w-4/5 lg:w-main md:w-full sm:w-full mx-auto mt-8"
      >
        Delivery
      </h2>
      <div className="">{deliveryQuestions}</div>
    </React.Fragment>
  );
};
export default index;
