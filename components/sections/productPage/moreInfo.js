import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const moreInfo = props => {
  return (
    <div className="w-full px-12 md:px-8 mt-6 sm:px-6">
      {/* <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
        Information on {props.viewProduct.currentProduct.name}
      </h3> */}
      <div className="inline-flex w-full sm:block md:block lg:block">
        {" "}
        <p className="p-2 text-justify w-2/5 sm:w-full md:w-full lg:w-full">
          Qui ullamco ipsum fugiat incididunt velit adipisicing aliqua Lorem
          duis sint excepteur duis dolor. Excepteur irure excepteur eiusmod quis
          pariatur esse esse deserunt ex ad nostrud proident eu incididunt. In
          occaecat officia cillum reprehenderit veniam aute deserunt veniam
          adipisicing proident. Tempor esse est quis non anim veniam aute ipsum
          aliquip consequat amet elit cillum magna. Voluptate labore incididunt
          irure nulla elit. Duis Lorem adipisicing mollit culpa laborum anim
          nisi dolor. Laboris adipisicing eiusmod non occaecat est deserunt sit
          ex. Qui ullamco ipsum fugiat incididunt velit adipisicing aliqua Lorem
          duis sint excepteur duis dolor.
          <br />
        </p>
        <video
          className="mb-4 mt-2 w-3/5 px-5 md:px-2 xm:px-2 sm:w-full h-full md:w-full lg:w-full"
          controls
          width="600"
        >
          <source src="/media/examples/flower.webm" type="video/webm" />
          <source src="/media/examples/flower.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <p className="p-2">
        Labore et proident incididunt veniam labore id adipisicing nostrud elit
        aliqua veniam. Enim pariatur officia anim eu. Tempor eiusmod enim duis
        id in. Ex tempor eiusmod velit ex non magna commodo dolore mollit
        eiusmod amet velit esse aliquip. Excepteur irure excepteur eiusmod quis
        pariatur esse esse deserunt ex ad nostrud proident eu incididunt. In
        occaecat officia cillum reprehenderit veniam aute deserunt veniam
        adipisicing proident. Tempor esse est quis non anim veniam aute ipsum
        aliquip consequat amet elit cillum magna. Voluptate labore incididunt
        irure nulla elit. Duis Lorem adipisicing mollit culpa laborum anim nisi
        dolor. Laboris adipisicing eiusmod non occaecat.
        <br />
        Excepteur irure excepteur eiusmod quis pariatur esse esse deserunt ex ad
        nostrud proident eu incididunt. In occaecat officia cillum reprehenderit
        veniam aute deserunt veniam adipisicing proident. Tempor esse est quis
        non anim veniam aute ipsum aliquip consequat amet elit cillum magna.
        Voluptate labore incididunt irure nulla elit. Duis Lorem adipisicing
        mollit culpa laborum anim nisi dolor. Laboris adipisicing eiusmod non
        occaecat est deserunt sit ex
      </p>
      <ul className="list-reset leading-normal mb-4">
        <li className="li--viewProduct">High THC Content</li>
        <li className="li--viewProduct">High Yield Indoors</li>
        <li className="li--viewProduct">Grows to be 5ft</li>
        <li className="li--viewProduct">Perfect for Hydro Setup</li>
        <li className="li--viewProduct">Resistance to Pests</li>
        <li className="li--viewProduct">Some More Info</li>
      </ul>
      <p>
        Qui ullamco ipsum fugiat incididunt velit adipisicing aliqua Lorem duis
        sint excepteur duis dolor. <br /> Ex voluptate elit nulla ea qui eu esse
        mollit incididunt est id. Deserunt sint aliquip culpa minim cupidatat
        ut. Aliqua ex officia mollit labore velit pariatur id reprehenderit aute
        ad nisi et ad cillum. Aliquip quis Lorem fugiat veniam do et adipisicing
        nostrud proident elit cillum sit.Id anim in nulla sit. Ullamco est
        laborum magna sint voluptate eiusmod ea. Cupidatat esse pariatur
        reprehenderit quis anim sunt commodo excepteur ullamco eu voluptate
        veniam sit. Cupidatat reprehenderit voluptate Lorem excepteur cillum
        nisi duis consequat et nisi sit. Eiusmod duis enim excepteur minim sit
        veniam enim eiusmod ad. <br />
        Pariatur velit quis laboris exercitation cupidatat excepteur est ex
        laborum voluptate nostrud.
      </p>
    </div>
  );
};

export default moreInfo;
