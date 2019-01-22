import moment from "moment";

const About = props => {
    let currentHistoryObj = props.about.historyObjs[props.about.currentHistoryObj];
    let content = currentHistoryObj.content;
    let currentImgSrc = currentHistoryObj.imgSrc;
    let date = moment(currentHistoryObj.date).format("MMM Do YYYY");
    let historyThumbnails = props.about.historyObjs.map((val, index) => {
        return (
            <div
                onClick={() => props.setCurrentHistoryObj(index)}
                key={index}
                className="m-1 w-1/4 h-16 cursor-pointer">
                <img src={val.imgSrc} className="rounded-lg w-full h-full shadow-lg" />
            </div>
        );
    });
    let whoWeAre = props.about.whoWeAre.map((val, index) => {
        return (
            <div key={index} className="w-250 flex flex-wrap justify-center content-start ">
                <img className="h-150 w-150 rounded-full" src={val.src} />
                <h2 className="w-250 my-5 mx-auto text-center uppercase ">{val.title}</h2>
                <p className="w-250 mx-auto text-center">{val.content}</p>
            </div>
        );
    });
    return (
        <div className="w-full mt-6 pb-6">
            <div className="font-bold text-2xl">
                <h1 className="text-3/5xl font-extrabold mb-6 p-2">About Us</h1>
            </div>
            <div className="w-full">
                <div>
                    <h3 className="font-extrabold text-center text-3/5xl text-grey-light uppercase">History</h3>
                </div>
                <div className="w-full p-2">
                    <div className="inline-flex mt-4 h-250">
                        <div style={{ width: "30%" }} className="w-1/3 ">
                            <img src={currentImgSrc} className="w-full h-250 shadow-lg" />{" "}
                        </div>
                        <div style={{ width: "40%" }} className="">
                            <p className="p-2 w-full text-justify px-6">{content}</p>
                            <p className="text-center font-bold text-xl mt-12 ">{date}</p>
                        </div>
                        <div
                            style={{ width: "30%" }}
                            className="w-1/3 flex-wrap wrap flex justify-center content-center">
                            {historyThumbnails}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div>
                    <h3 className="font-extrabold text-center mt-12 mb-8 text-3/5xl text-grey-light uppercase">
                        Who We Are
                    </h3>
                </div>
                <div className="w-full flex flex-wrap justify-around">{whoWeAre}</div>
            </div>
        </div>
    );
};

export default About;
