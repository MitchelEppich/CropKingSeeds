import key from "weak-key";

const content = props => {
  let search = props.wiki.search;
  let contentSections = Object.entries(props.wiki.sections).map(
    (option, index) => {
      let imageIndex = 0;
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
        let i,
          contentWithImages = [],
          lastIndex = 0;
        for (i = 0; i < content.length; i++) {
          if (content.substring(i, i + 6) === " &=># ") {
            contentWithImages.push(content.slice(lastIndex, i));
            contentWithImages.push(
              <a
                key={key({ key: "Payments" })}
                href="#payment-paymentmethods"
                className="border border-red-grey shadow-md px-3 p-1 mx-2"
              >
                Payments
              </a>
            );
            imageIndex++;
            lastIndex = i + 6;
          }
          if (content.substring(i, i + 5) === " &=> ") {
            contentWithImages.push(content.slice(lastIndex, i));
            contentWithImages.push(
              <img
                key={key({ key: option[1].images[imageIndex] })}
                srcSet={`${option[1].images[imageIndex]}`}
                className="my-3 block mx-auto"
              />
            );
            imageIndex++;
            lastIndex = i + 5;
          }
        }
        contentWithImages.push(content.slice(lastIndex));
        if (search.length > 0) {
          let i,
            contentArr = [];
          lastIndex = 0;
          for (i = 0; i < contentWithImages.length; i++) {
            if (
              contentWithImages[i].type != "img" &&
              contentWithImages[i].type != "span" &&
              contentWithImages[i].type != "a" &&
              contentWithImages[i].type != "picture"
            ) {
              for (let x = 0; x < contentWithImages[i].length; x++) {
                if (
                  contentWithImages[i]
                    .substring(x, x + search.length)
                    .toLowerCase() === search
                ) {
                  contentArr.push(
                    <span
                      key={key({
                        key: contentWithImages[i].slice(lastIndex, x)
                      })}
                    >
                      {contentWithImages[i].slice(lastIndex, x)}
                    </span>
                  );
                  contentArr.push(spanHighlight);
                  lastIndex = x + search.length;
                }
              }

              contentArr.push(
                <span
                  key={key({
                    key: contentWithImages[i].slice(lastIndex)
                  })}
                >
                  {contentWithImages[i].slice(lastIndex)}
                </span>
              );
              contentWithImages[i] = contentArr;
            }
          }
        }

        return (
          <div key={heading.name}>
            <p className="font-black text-lg my-2 mt-5">{heading.name}</p>
            <p
              id={
                option[0].toLowerCase().replace(/ /g, "") +
                "-" +
                heading.name.toLowerCase().replace(/ /g, "")
              }
              className="leading-loose"
            >
              {contentWithImages}
            </p>
          </div>
        );
      });

      return (
        <div key={option[0]} className="w-full my-12">
          <h2 className="my-2">{option[0]}</h2>
          <div>{subsections}</div>
        </div>
      );
    }
  );
  return <div className="w-2/3 p-8 h-full">{contentSections}</div>;
};

export default content;
