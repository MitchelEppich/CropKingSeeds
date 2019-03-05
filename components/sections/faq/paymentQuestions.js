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
  let paymentQuestions = questions.slice(3, 6).map((question, index) => {
    return <Question key={index} index={index + 3} {...question} {...props} />;
  });

  return (
    <React.Fragment>
      <h2
        id="payment"
        className="w-1/2 xl:w-4/5 lg:w-main md:w-full sm:w-full mx-auto mt-8"
      >
        Payment
      </h2>
      <div className="">{paymentQuestions}</div>
    </React.Fragment>
  );
};
export default index;
