import Link from "next/link";

const Post = props => {
<<<<<<< HEAD
    return (
        <div className="mx-auto bg-white flex flex-wrap md:mt-4 sm:mt-4">
            <div className="sm:w-full md:w-full sm:h-250 md:h-200 w-1/2 p-4 xxl:mt-12 h-300 lg:h-250 shadow-lg">
                <h2 className="text-center font-hairline xl:mt-8 xxl:text-4xl xl:text-4xl lg:text-4xl sm:text-3xl text-red-dark">
                    Germination
                </h2>
                <p className="text-justify p-2 xl:my-4 ">
                    Proper germination is the first step to get your cannabis plants growing successfully. Follow our 5
                    easy steps, or watch our short video to assure your plants flourish right from the seed.
                </p>
                <Link href="/germination">
                    <div className="bg-red-dark text-white p-2 px-6 mt-4 flex items-center text-center rounded-lg h-12 w-32 mx-auto cursor-pointer">
                        Read More
                    </div>
                </Link>
            </div>
            <div className="sm:w-full md:w-full sm:h-150 md:h-250 w-1/2 xl:mt-4 lg:mt-4 overflow-hidden">
                <img src="../static/img/cannabis.jpg" alt="germination-post" className="w-full" />
            </div>
        </div>
    );
=======
  return (
    <div className="mx-auto bg-white flex flex-wrap">
      <div className="sm:w-full w-1/2 p-4 mt-12 h-300 shadow-lg">
        <h2 className="text-center font-extrabold xl:mt-8 text-4xl text-red-dark">
          Germination
        </h2>
        <p className="text-justify p-2 xl:my-4 ">
          Proper germination is the first step to get your cannabis plants
          growing successfully. Follow our 5 easy steps, or watch our short
          video to assure your plants flourish right from the seed.
        </p>
        <Link href="/germination">
          <div className="bg-red-dark text-white p-2 px-6 mt-4 flex items-center justify-center font-bold text-lg h-12 w-48 mx-auto cursor-pointer hover:bg-grey">
            Read More
          </div>
        </Link>
      </div>
      <div className="sm:w-full w-1/2">
        <img
          src="../static/img/cannabis.jpg"
          alt="germination-post"
          className="w-full"
        />
      </div>
    </div>
  );
>>>>>>> 1ab2566b97c0a8fd3a43c946510c44e4f7f99ddd
};

export default Post;
