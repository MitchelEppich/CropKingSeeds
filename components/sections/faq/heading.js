import Link from "next/link";
import SearchBar from "./searchBar";

const heading = props => {
  return (
    <div className="mt-5 xxl:w-1/2 w-4/5 mx-auto text-center font-black">
      <h1 className="mt-4 text-grey font-bold text-center text-3/5xl sm:text-3xl  mx-auto w-full text-center mb-8">
        Frequently Asked Questions
      </h1>
      <SearchBar {...props} />
      <p className="mt-12 text-lg">
        Can't find the answer to your question? Feel free to{" "}
        <Link prefetch href="/contact">
          <span className="text-red-dark cursor-pointer hover:text-grey">
            Contact Us
          </span>
        </Link>
        , we are ready 24/7 Worldwide to assist you with any question you may
        have.
      </p>
    </div>
  );
};

export default heading;
