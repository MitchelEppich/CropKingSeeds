import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const menu = props => {
  let menuStyle = {
    // backgroundImage: "url(../static/img/red.png)",
  };

  return (
    <div
      style={{
        background: "white",
        background: "url(static/img/redbg.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
        height: "178px",
        overflow: "hidden",
        zIndex: "-18",
        position: "absolute"
      }}
      className="w-full">
      <div className="w-full h-16 inline-flex mt-6">
        <div className="w-1/2 relative">
          <div
            style={{ background: "#f9f9f9" }}
            className="absolute pin-l shadow-md my-auto rounded -ml-2">
            <p className="pl-12 pr-8 p-3 uppercase font-extrabold text-xl">
              Call: 604-563-0291
            </p>
          </div>
        </div>

        <div className="w-1/2">
          <div
            style={{ background: "#f9f9f9" }}
            className="absolute pin-r shadow-md my-auto rounded -mr-2 inline-flex cursor-pointer scale-item">
            <div className="w-16 rounded bg-yellow-dark p-2 items-center flex justify-center">
              <p>
                <FontAwesomeIcon icon={faDollarSign} className="fa-lg" />
              </p>
            </div>
            <p className="px-6 p-3 uppercase text-center font-extrabold text-xl">
              USD
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ background: "rgba(93, 9, 9, 0.71)" }}
        className="w-full h-16">
        <div
          style={{ marginTop: "32px" }}
          className="w-container mx-auto text-center relative">
          <div className="ray_box">
            <div
              className="ray"
              style={{
                height: "170px",
                width: "30px",
                transform: "rotate(0deg)",
                WebkitTransform: "rotate(0deg)",
                top: "-175px",
                left: "3px"
              }}
            />
            <div
              className="ray"
              style={{
                height: "170px",
                width: "30px",
                transform: "rotate(90deg)",
                WebkitTransform: "rotate(90deg)",
                top: "-58px",
                left: "120px"
              }}
            />
            <div
              className="ray"
              style={{
                height: "170px",
                width: "30px",
                transform: "rotate(270deg)",
                WebkitTransform: "rotate(270deg)",
                top: "-58px",
                left: "-115px"
              }}
            />
            <div
              className="ray"
              style={{
                height: "170px",
                width: "30px",
                transform: "rotate(180deg)",
                WebkitTransform: "rotate(180deg)",
                top: "60px",
                left: "3px"
              }}
            />
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/4 flex justify-center pl-20">
              <div
                className="absolute"
                style={{
                  width: "175px",
                  height: "175px",
                  borderRadius: "50%",
                  background: "#600706",
                  padding: "6px",
                  marginTop: "-60px",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 10px",
                  position: "fixed"
                }}
              />
              <img
                style={{
                  width: "200px",
                  padding: "0px",
                  marginTop: "-85px",
                  position: "fixed"
                }}
                src="../static/img/cropkingseeds-footer.png"
                className="scale-item absolute cursor-pointer"
              />
            </div>
            <div className="w-3/4 flex justify-start">
              <ul className="inline-flex text-white mt-3 uppercase">
                <Link href="/">
                  <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
                    Home
                  </li>
                </Link>
                <Link href="/shop">
                  <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
                    Shop
                  </li>
                </Link>
                <Link href="/germination">
                  <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
                    Germination
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
                    Contact
                  </li>
                </Link>
                <li className="font-extrabold text-2xl px-2 mx-8 cursor-pointer scale-item">
                  <div
                    onClick={() => {
                      props.setVisibleScreen({ input: "viewCart" });
                    }}
                    className="text-center cursor-pointer mt-1 text-white">
                    <div className="">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="fa-lg"
                      />
                      {/* <img
                        src="../static/img/shopping-cart-xxl.png"
                        width="40px"
                      /> */}

                      <span
                        style={{
                          height: "28px",
                          width: "28px",
                          // border: "0.3px solid #a31621",
                          borderRadius: "50%",
                          background: "#ffca0f",
                          position: "absolute",
                          marginTop: "-10px",
                          color: "#404040",
                          fontSize: "16px",
                          textAlign: "center",
                          paddingTop: "6px",
                          marginTop: "-14px",
                          marginLeft: "-5px"
                        }}>
                        {Object.keys(props.cart.items).length}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // DESIGN DRE
  // <div className="w-full bg-white">
  //   <div className="w-full h-100 inline-flex mt-6">
  //     <div className="w-1/4 relative">
  //       <div
  //         style={{ background: "#f9f9f9" }}
  //         className="absolute pin-l shadow-md my-auto rounded -ml-2">
  //         <p className="pl-12 pr-8 p-3 uppercase font-extrabold text-xl">
  //           Call: 604-563-0291
  //         </p>
  //       </div>
  //     </div>
  //     <div className="w-2/4 inline-flex items-center flex">
  //       <div
  //         style={{ width: "35%" }}
  //         className="text-center font-black text-3xl uppercase">
  //         <p>"World Class</p>
  //       </div>
  //       <div style={{ width: "30%" }} className="cursor-pointer text-center">
  //         <img
  //           style={{
  //             width: "155px",
  //             borderRadius: "49%",
  //             background: "white",
  //             padding: "6px"
  //           }}
  //           src="../static/img/cks_logo.png"
  //           className="scale-item mt-4"
  //         />
  //       </div>
  //       <div
  //         style={{ width: "35%" }}
  //         className="text-center font-black text-3xl uppercase">
  //         <p>Cannabis Seeds"</p>
  //       </div>
  //     </div>
  //     <div className="w-1/4">
  //       <div
  //         style={{ background: "#f9f9f9" }}
  //         className="absolute pin-r shadow-md my-auto rounded -mr-2 inline-flex cursor-pointer scale-item">
  //         <div className="w-16 rounded bg-yellow-dark p-2 items-center flex justify-center">
  //           <p>
  //             <FontAwesomeIcon icon={faDollarSign} className="fa-lg" />
  //           </p>
  //         </div>
  //         <p className="px-6 p-3 uppercase text-center font-extrabold text-xl">
  //           USD
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="w-full bg-red-dark h-20">
  //     <div className="w-container mx-auto p-2 text-center mt-4">
  //       <ul className="inline-flex text-white mt-4 uppercase">
  //         <Link href="/">
  //           <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
  //             Home
  //           </li>
  //         </Link>
  //         <Link href="/shop">
  //           <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
  //             Shop
  //           </li>
  //         </Link>
  //         <Link href="/germination">
  //           <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
  //             Germination
  //           </li>
  //         </Link>
  //         <Link href="/contact">
  //           <li className="font-extrabold text-2xl p-2 mx-8 cursor-pointer scale-item">
  //             Contact
  //           </li>
  //         </Link>
  //         <li className="font-extrabold text-2xl px-2 mx-8 cursor-pointer scale-item">
  //           <div
  //             onClick={() => {
  //               props.setVisibleScreen({ input: "viewCart" });
  //             }}
  //             className="text-center cursor-pointer text-white">
  //             <div className="">
  //               <img src="../static/img/shopping-cart-xxl.png" width="40px" />

  //               <span
  //                 style={{
  //                   height: "28px",
  //                   width: "28px",
  //                   border: "0.3px solid #a31621",
  //                   borderRadius: "50%",
  //                   background: "#ffca0f",
  //                   position: "absolute",
  //                   marginTop: "-10px",
  //                   color: "#404040",
  //                   fontSize: "16px",
  //                   textAlign: "center",
  //                   paddingTop: "6px",
  //                   marginTop: "-14px",
  //                   marginLeft: "-5px"
  //                 }}>
  //                 {Object.keys(props.cart.items).length}
  //               </span>
  //             </div>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </div>
  // <div
  //   style={menuStyle}
  //   className=" w-full bg-white h-20 inline-flex test shadow-md">
  //   <div className="w-1/2 inline-flex">
  //     <div className="p-2 w-1/5 text-center p-3 cursor-pointer text-red-dark">
  //       <FontAwesomeIcon icon={faSearch} className="fa-2x p-1 mt-3" />
  //     </div>
  //     <div className="w-full mt-3">
  //       <ul className="inline-flex w-full text-red-dark font-bold text-lg pt-2 pl-32">
  //         <Link href="/shop">
  //           <li className="px-2 py-1 mx-2 cursor-pointer text-2xl hover:text-red-darker">
  //             Shop
  //           </li>
  //         </Link>
  //         <Link href="/germination">
  //           <li className="px-2 py-1 mx-2 cursor-pointer text-2xl hover:text-red-darker">
  //             Germination
  //           </li>
  //         </Link>
  //       </ul>
  //     </div>
  //   </div>
  //   <div
  //     onClick={() => console.log(props)}
  //     className="cursor-pointer text-center">
  //     <img
  //       src="../static/img/cropkingseeds.png"
  //       className="w-32 scale-item"
  //     />
  //   </div>

  //   <div className="w-1/2 inline-flex">
  //     <div className="w-3/5 mt-2">
  //       <ul className="inline-flex text-red-dark w-full font-bold justify-end text-lg pt-2">
  //         <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-darker">
  //           <FontAwesomeIcon icon={faFacebookF} className="fa-2x p-1" />
  //         </li>
  //         <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-darker">
  //           <FontAwesomeIcon icon={faTwitter} className="fa-2x p-1" />
  //         </li>
  //         <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-darker">
  //           <FontAwesomeIcon icon={faInstagram} className="fa-2x p-1" />
  //         </li>
  //       </ul>
  //     </div>

  //     <div className="w-2/5 mt-2 text-center mt-4">
  //       <p className="text-red-dark p-2 mt-2 text-lg font-extrabold">
  //         Call: 604-563-0291
  //       </p>
  //     </div>
  //     <div
  //       onClick={() => {
  //         props.setVisibleScreen({ input: "viewCart" });
  //       }}
  //       className="w-1/5 text-center pt-6 cursor-pointer text-red-dark">
  //       <div className="scale-item">
  //         <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
  //         <span
  //           style={{
  //             height: "28px",
  //             width: "28px",
  //             border: "0.3px solid #a31621",
  //             borderRadius: "50%",
  //             background: "white", // boxShadow: "0 3px 7px rgba(191, 191, 191, 0.94)",
  //             position: "absolute",
  //             marginTop: "-10px",
  //             color: "#404040",
  //             fontSize: "19px",
  //             fontWeight: "bolder",
  //             textAlign: "center",
  //             paddingTop: "4px",
  //             marginTop: "-14px",
  //             marginLeft: "-5px"
  //           }}>
  //           {Object.keys(props.cart.items).length}
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // </div>
};

export default menu;
