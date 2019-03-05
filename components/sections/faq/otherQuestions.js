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
  let otherQuestions = questions.slice(6).map((question, index) => {
    return <Question key={index} index={index + 6} {...question} {...props} />;
  });

  return <div className="">{otherQuestions}</div>;
};
export default index;
