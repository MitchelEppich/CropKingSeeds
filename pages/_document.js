import Document, { Head, Main, NextScript } from "next/document";

import strainsData from "../static/strainsSchemaData";
import {
    JSONLD,
    Generic,
    Product,
    AggregateRating,
    GenericCollection,
    Review,
    Author,
    Rating,
    Location
} from "react-structured-data";

import { library } from "@fortawesome/fontawesome-svg-core"; // FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    generateSchemaMarkup = strains => {
        return strains.map((strain, index) => {
            let reviews;
            if (strain.reviews != null && strain.reviews.length > 0) {
                reviews = strain.reviews.map((review, index) => {
                    let str = review;
                    let { 0: name, 1: email, 2: body, 3: rating, 4: time } =
                        str != "" ? str.split("&=>") : ["", "", "", ""];
                    return (
                        <Review key={index * 2} reviewBody={body} datePublished={time}>
                            <Author name={name} />
                            <Location name="" />
                            <Rating ratingValue={rating} />
                        </Review>
                    );
                });
            }
            return (
                <JSONLD key={index * 3}>
                    <Generic
                        type="product"
                        jsonldtype="Product"
                        schema={{
                            name: strain.name,
                            description: strain.description,
                            image: "http://dcfgweqx7od72.cloudfront.net" + strain.packageImg,
                            price: strain.price > 0 ? strain.price[0] : strain.price[1]
                        }}>
                        <AggregateRating ratingValue={strain.rating} reviewCount={strain.reviews.length} />
                        <GenericCollection type="review">{reviews != null ? reviews : null}</GenericCollection>
                    </Generic>
                </JSONLD>
            );
        });
    };
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="theme-color" content="#a90000" />
                    <title>Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds</title>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width, maximum-scale=1"
                        key="viewport"
                    />
                    <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
                    <meta name="robots" content="index, follow" />
                    <meta
                        name="description"
                        content="Crop King Seeds has been perfecting the marijuana seeds industry for medical and commercial growers seeking maximum results in THC levels and harvest size."
                    />
                    <meta
                        name="keywords"
                        content="crop king seeds, feminized seeds, autoflowering seeds, medical marijuana, marijuana seeds, marijuana seeds canada, cannabis, cannabis seeds"
                    />
                    <meta name="copyright" content="" />
                    {/* <link rel="manifest" href="/_next/static/manifest.json" /> */}
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="icon" href="static/favicon.ico" />

                    {this.generateSchemaMarkup(strainsData)}

                    {/* <link rel="canonical" href="https://www.sonomaseeds.com/" />
                    <meta property="og:title" content="Sonoma Cannabis Seeds - Grow Organically" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.sonomaseeds.com/" />
                    <meta property="og:image" content="https://www.sonomaseeds.com/wp-content/uploads/2019/01/sonoma-seeds-graph.jpg" />
                    <meta property="og:site_name" content="Sonoma Cannabis Seeds" />
                    <meta property="fb:admins" content="148158655885411" />
                    <meta property="fb:app_id" content="257955865103099" />
                    <meta property="og:description" content="Sonoma Seeds is a West Coast based cannabis seeds brand providing the best seeds from around the world. We carry medical grade CBD seeds and recreational seeds." />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@sonomaseeds" />
                    <meta name="twitter:domain" content="sonomaseeds.com" />
                    <meta name="twitter:title" content="Sonoma Cannabis Seeds - Grow Organically" />
                    <meta name="twitter:description" content="Sonoma Seeds is a West Coast based cannabis seeds brand providing the best seeds from around the world. We carry medical grade CBD seeds and recreational seeds." />
                    <meta name="twitter:image" content="https://www.sonomaseeds.com/wp-content/uploads/2019/01/sonoma-seeds-graph.jpg" />
                    <meta itemprop="image" content="https://www.sonomaseeds.com/wp-content/uploads/2019/01/sonoma-seeds-graph.jpg" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript>
                        <div className="w-full flex-1 h-screen content-center text-center">
                            {/* <FontAwesomeIcon icon={faExclamationTriangle} className="img-error " /> */}
                            {/* <img
                                src="../static/images/Thumbnail.png"
                                alt="No JavaScript"
                                className="img-error"
                            /> */}
                            <h1 className="mt-10 title-message">JavaScript is Required.</h1>
                            <h3 className="mt-2 subtitle-message">Enable JavaScript in your browser and try again.</h3>
                        </div>
                    </noscript>
                    <script src="../static/scripts/functions.js" />
                </body>
            </html>
        );
    }
}
