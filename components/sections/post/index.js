import Link from "next/link";

const Post = props => {
    return (
        <div className="mx-auto bg-white flex">
            <div className="w-1/2 p-4 mt-12 h-300 shadow-lg">
                <h2 className="text-center font-hairline xl:mt-8 text-4xl text-red-dark">Germination</h2>
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
            <div className="w-1/2">
                <img src="../static/img/cannabis.jpg" alt="germination-post" className="w-full" />
            </div>
        </div>
    );
};

export default Post;
