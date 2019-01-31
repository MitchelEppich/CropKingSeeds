import FilterArticles from "./filterArticles";
import ArticleItem from "./articleItem";

const AllArticles = props => {
  return (
    <div>
      <div className="pt-8">
        <h3 className="font-bold text-3xl">All Articles</h3>
      </div>
      <FilterArticles />
      <div className="w-full inline-flex flex-wrap mt-6 justify-around flex">
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
        <div className="w-1/5 mx-1">
          <ArticleItem {...this.props} />
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
