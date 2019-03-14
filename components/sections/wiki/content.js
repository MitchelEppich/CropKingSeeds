const content = props => {
  let contentSections = Object.entries(props.wiki.sections).map(
    (option, index) => {
      // console.log(option);
      let subsections = option[1].subheadings.map((heading, index) => {
        return (
          <div key={index}>
            <p className="font-black text-lg my-2 mt-5">{heading.name}</p>
            <p id={option[0] + "-" + heading.name} className="leading-normal">
              {heading.content}
            </p>
          </div>
        );
      });
      return (
        <div key={index} className="w-full my-12">
          <h2 className="my-2">{option[0]}</h2>
          <div>{subsections}</div>
        </div>
      );
    }
  );
  return <div className="w-2/3 p-8 h-full">{contentSections}</div>;
};
export default content;
