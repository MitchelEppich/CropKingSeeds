import Document, { Head, Main, NextScript } from "next/document";
import { JSONLD, Generic } from "react-structured-data";

import { library } from "@fortawesome/fontawesome-svg-core"; // FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="theme-color" content="#a90000" />
                    <title>Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds</title>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
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

                    {/* <JSONLD>
                        <Generic
                            name="Crop King Seeds"
                            type="webApplication"
                            jsonldtype="WebApplication"
                            schema={{
                                applicationCategory: "Multimedia",
                                browserRequirements: "requires HTML5 support"
                            }}
                        />
                    </JSONLD> */}
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
                </body>
            </html>
        );
    }
}
