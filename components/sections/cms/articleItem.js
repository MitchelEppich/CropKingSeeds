const ArticleItem = props => {
  return (
    <div className="w-full shadow-md rounded-lg text-grey overflow-hidden my-2 scale-item">
      <div className="w-full">
        <img
          alt="articleImag"
          src="../../static/img/cannabis.jpg"
          className=""
        />
      </div>
      <div className="w-full p-2">
        <h3 className="p-2 font-bold ">Article about Marijuana</h3>
        <p className="text-xs">Posted on Set, 24th - 2019</p>
        <p className="p-2 mt-4">
          Proident culpa ad mollit sint consequat consequat dolore minim. Aliqua
          ex aliquip adipisicing excepteur irure veniam nisi id velit ut
          voluptate laborum cupidatat.
        </p>
      </div>
    </div>
  );
};

export default ArticleItem;
