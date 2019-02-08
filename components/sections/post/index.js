import Link from "next/link";

const Post = props => {
    return (
        <div className="mx-auto bg-white flex flex-wrap my-3 md:mt-4 sm:mt-4 shadow-lg">
            <div className="sm:w-full md:w-full sm:h-250 md:h-200 w-1/2 p-4 xxl:mt-12 h-300 lg:h-250 ">
                <h2 className="text-center font-extrabold xl:mt-8 xxl:text-4xl xl:text-4xl lg:text-4xl sm:text-3xl text-red-dark ">
                    Germination
                </h2>
                <p className="text-justify p-2 xl:my-4 ">
                    Proper germination is the first step to get your cannabis plants growing successfully. Follow our 5
                    easy steps, or watch our short video to assure your plants flourish right from the seed.
                </p>
                <Link prefetch href="/germination">
                    <div className="bg-red-dark text-white p-2 px-6 mt-4 flex items-center justify-center h-12 w-48 mx-auto cursor-pointer rounded font-bold hover:bg-red-light">
                        Read More
                    </div>
                </Link>
            </div>
            <div className="sm:w-full md:w-full px-1 sm:h-150 md:h-250 w-1/2 xl:mt-4 lg:mt-4 overflow-hidden relative">
                <div className="pt-2 text-right absolute w-full overflow-hidden">
                    <iframe
                        className="shadow-lg rounded overflow-hidden"
                        width="550"
                        height="313"
                        src="https://growreel.com/embed/5bc119ae674e3139208e8047"
                        frameBorder="0"
                        autoPlay={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
