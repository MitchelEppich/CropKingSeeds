module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([7],{212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(9),o=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){var t=e.position+e.index;e.position+e.index>=e.misc.bannerSlides.length&&(t=e.position+e.index-e.misc.bannerSlides.length);var n=e.misc.bannerSlidePositions[t];return r.a.createElement("div",{onClick:function(){e.nextBannerSlide()},style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}({},n,e.style),className:"xxl:h-600 xl:h-400 lg:h-400 md:h-250 sm:h-44 w-full z-0 absolute bg-"+e.color},2==e.index?r.a.createElement(o.a,{href:"http://localhost:3000/product/gelato"},r.a.createElement("button",{className:"bannerBuyNow sm:hidden"},"Buy Now")):null)};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){var t=e.misc.bannerSlides.map(function(t,n){return r.a.createElement(s,i({key:n},e,{position:e.misc.activeBannerSlide,index:n,style:t.style,color:t.color}))});return r.a.createElement("div",{className:"xxl:h-600 xl:h-400 lg:h-400 md:h-250 sm:mt-6 sm:h-250  w-full flex relative overflow-hidden"},t,2==e.misc.activeBannerSlide?r.a.createElement(o.a,{href:"http://localhost:3000/product/gelato"},r.a.createElement("button",{className:"bannerBuyNow sm:block md:hidden lg:hidden xl:hidden xxl:hidden"},"Buy Now")):null)}},213:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(9),o=n.n(l),c=n(2),s=n(35),i=n(3);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}s.b.add(i.p);t.a=function(e){var t=["sm","md"].includes(e.misc.mediaSize),n=[{name:"feminized",strainImg:"../static/img/feminized.png",packImg:"../static/img/strains/package/feminizedPack.png",background:"url(../static/img/Red.png)",color:"#ff1111"},{name:"autoflower",strainImg:"../static/img/autoflower.png",packImg:"../static/img/strains/package/autoflowerPack.png",background:"url(../static/img/Purple.png)",color:"#8c00ff"},{name:"cbd",strainImg:"../static/img/cbd.png",packImg:"../static/img/strains/package/CBDPack.png",background:"url(../static/img/White.png)",color:"#D2C9C9"},{name:"regular",strainImg:"../static/img/regular.png",packImg:"../static/img/strains/package/RegularPack.png",background:"url(../static/img/green.png)",color:"#1C8B04"}].map(function(n,a){var l,s,u={position:"absolute",bottom:"0"},f={opacity:0};return e.misc.geneHoverIndex!=a&&"lg"!=e.misc.mediaSize||(u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){m(e,t,n[t])})}return e}({},u,{transform:"translateY(100%)",opacity:0}),l={opacity:0},s={transform:"translateX(-130px) rotate(-90deg)"},f={opacity:1}),r.a.createElement(o.a,{href:"/shop",key:a},r.a.createElement("div",{style:{position:"relative",backgroundImage:n.background},onClick:function(){e.toggleFilter({filter:e.shop.activeFilters,genetic:n.name,multiple:!0}),window.scroll(0,0)},onMouseEnter:function(){t||e.setGeneHoverIndex(a)},onMouseLeave:function(){t||e.setGeneHoverIndex(a)},className:"genePreview"},r.a.createElement("img",{className:"sm:hidden md:hidden absolute w-full slow",src:n.strainImg,style:u}),r.a.createElement("div",{style:s,className:"screenClass bg-almost-black text-white uppercase"},r.a.createElement("img",{src:n.packImg,style:f,className:"sm:hidden packClass slow"}),r.a.createElement("p",{style:l,className:"sm:w-full sm:pr-12 sm:flex sm:justify-between md:w-full md:pr-12 md:flex md:justify-between headingClass absolute sm:text-3xl md:text-3/5xl lg:text-3xl xl:text-3/5xl xxl:text-3/5xl"},r.a.createElement("span",{className:"sm:w-2/3"},n.name),t?r.a.createElement("span",{className:"sm:w-12 sm:text-right md:w-12 md:text-right"},r.a.createElement(c.a,{icon:i.p,style:{color:n.color},className:"p-1"})):null))))});return r.a.createElement("div",{className:"flex flex-wrap w-full xl:mb-4 xl:h-500 mx-auto relative overflow-hidden"},n)}},214:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(9),o=n.n(l);t.a=function(e){return r.a.createElement("div",{className:"mx-auto bg-white flex flex-wrap my-3 md:mt-4 sm:mt-4 shadow-lg"},r.a.createElement("div",{className:"sm:w-full md:w-full sm:h-250 md:h-200 w-1/2 p-4 xxl:mt-12 h-300 lg:h-250 "},r.a.createElement("h2",{className:"text-center font-extrabold xl:mt-8 xxl:text-4xl xl:text-4xl lg:text-4xl sm:text-3xl text-red-dark "},"Germination"),r.a.createElement("p",{className:"text-justify p-2 xl:my-4 "},"Proper germination is the first step to get your cannabis plants growing successfully. Follow our 5 easy steps, or watch our short video to assure your plants flourish right from the seed."),r.a.createElement(o.a,{href:"/germination"},r.a.createElement("div",{className:"bg-red-dark text-white p-2 px-6 mt-4 flex items-center justify-center h-12 w-48 mx-auto cursor-pointer rounded font-bold hover:bg-red-light"},"Read More"))),r.a.createElement("div",{className:"sm:w-full md:w-full px-1 sm:h-150 md:h-250 w-1/2 xl:mt-4 lg:mt-4 overflow-hidden relative"},r.a.createElement("div",{className:"pt-2 text-center absolute w-full"},r.a.createElement("iframe",{className:"shadow-lg rounded overflow-hidden",transform:"translateZ(5deg)",width:"560",height:"312",src:"https://growreel.com/embed/5bc119ae674e3139208e8047",frameBorder:"0",autoPlay:!1}))))}},880:function(e,t,n){e.exports=n(881)},881:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),l=n(14),o=n(10),c=n(6),s=n(24),i=n(212),m=n(213),u=n(214),f=n(2),p=n(3),d=n(1),g=n.n(d),h=function(e){var t=e.misc.upcomingEvents[e.misc.currentEventObj],n=(e.misc.currentEventObj,t.desc,t.name,t.date,t.img),a=e.misc.upcomingEvents.map(function(n,a){var l=g()(n.date).format("LL");return r.a.createElement("div",{onMouseEnter:function(){e.setCurrentEvent(a)},onClick:function(){e.setCurrentEvent(a),console.log(e.misc.upcomingEvents[a],a)},className:"w-full mx-4 scale-item cursor-pointer"},r.a.createElement("div",{className:"w-full p-2 border-b-2 border-grey-lightest"},r.a.createElement("h3",{className:"px-2 p-1 font-bold text-2xl ".concat(t==n?"text-red-dark":"text-grey"," ")},r.a.createElement(f.a,{icon:p.h,className:" ".concat(t==n?"text-red-dark":"text-grey"," fa-md mr-2  opacity-50")})," ",n.name),r.a.createElement("p",{className:"px-2 text-sm font-bold"},l),r.a.createElement("p",{className:"p-2"},n.desc)))});return r.a.createElement("div",{className:"lg:mt-12 w-full h-full"},r.a.createElement("div",{className:"p-4 mt-6 w-full"},r.a.createElement("h2",{className:"text-3/5xl font-bold text-center w-full p-2 bg-red-darker text-white"},"Upcoming Events")),r.a.createElement("div",{className:"inline-flex w-full px-12 py-4 sm:flex-col md:flex-col lg:flex-col"},r.a.createElement("div",{className:"w-1/2 sm:w-full md:w-full lg:w-full p-2"},r.a.createElement("img",{style:{height:"460px",width:"100%",overflow:"hidden",objectFit:"cover",objectPosition:"top",boxShadow:"0 0px 10px rgba(0, 0, 0, 0.26)"},src:"".concat(n),className:"w-full about-img md:w-4/5 sm:h-200 md:h-64 h-450 xl:h-250 lg:h-450 shadow-lg"})),r.a.createElement("div",{className:"w-1/2 sm:w-full md:w-full lg:w-full p-2"},a)," "))};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(l=[{key:"componentWillMount",value:function(){this.props.getStrains()}},{key:"componentDidMount",value:function(){}},{key:"runCarousel",value:function(e,t){!function n(){t(),setTimeout(n,e)}()}},{key:"render",value:function(){return r.a.createElement(s.a,this.props,null!=this.props.misc.strains?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,this.props),r.a.createElement(m.a,this.props),r.a.createElement(u.a,this.props),r.a.createElement(h,this.props)):r.a.createElement("p",{className:"text-transparent text-4xl h-500 w-full py-32"},r.a.createElement("span",{className:"text-black"},"Loading...")))}}])&&b(n.prototype,l),o&&b(n,o),t}();t.default=Object(o.connect)(function(e){return e},function(e){return{setVisibleScreen:function(t){return e(c.a.setVisibleScreen(t))},setGeneHoverIndex:function(t){return e(c.a.setGeneHoverIndex(t))},nextBannerSlide:function(){return e(c.a.nextBannerSlide())},toggleTransitionStatus:function(){return e(c.a.toggleTransitionStatus())},getStrains:function(){return e(c.a.getStrains())},toggleFilter:function(t){return e(c.a.toggleFilter(t))},setCurrentEvent:function(t){return e(c.a.setCurrentEvent(t))}}})(Object(l.a)(w))}},[880]).default}});