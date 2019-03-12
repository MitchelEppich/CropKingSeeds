const content = props => {
  let contentSections = Object.entries(props.wiki.sections).map(
    (option, index) => {
      return (
        <div key={index} className="w-full h-12">
          {option[0]}
          {/* <div>{options[1]}</div> */}
        </div>
      );
    }
  );
  return <div className="w-2/3 p-8 h-full">{contentSections}</div>;
};
export default content;
