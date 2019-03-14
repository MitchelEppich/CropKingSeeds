const content = props => {
  let search = props.wiki.search;

  let contentSections = Object.entries(props.wiki.sections).map(
    (option, index) => {
      if (search.length > 0) {
        if (
          !JSON.stringify(option)
            .toLowerCase()
            .includes(search)
        ) {
          return null;
        }
      }
      let subsections = option[1].subheadings.map((heading, index) => {
        let content = heading.content;
        let spanHighlight = <span className="text-red-light">{search}</span>;
        if (search.length > 0) {
          let i,
            contentArr = [],
            lastIndex = 0;
          for (i = 0; i < content.length; i++) {
            if (
              content.substring(i, i + search.length).toLowerCase() === search
            ) {
              contentArr.push(<span>{content.slice(lastIndex, i)}</span>);
              contentArr.push(spanHighlight);
              lastIndex = i + search.length;
            }
          }
          contentArr.push(<span>{content.slice(lastIndex)}</span>);
          content = contentArr;
        }

        return (
          <div key={index}>
            <p className="font-black text-lg my-2 mt-5">{heading.name}</p>
            <p
              id={
                option[0].toLowerCase().replace(/ /g, "") +
                "-" +
                heading.name.toLowerCase().replace(/ /g, "")
              }
              className="leading-normal"
            >
              {content}
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
