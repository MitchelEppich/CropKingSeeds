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
          <title>
            Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1"
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

          <JSONLD>
            <Generic
              name="Crop King Seeds"
              type="webApplication"
              jsonldtype="WebApplication"
              schema={{
                applicationCategory: "Multimedia",
                browserRequirements: "requires HTML5 support"
              }}
            />
          </JSONLD>
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
              <h3 className="mt-2 subtitle-message">
                Enable JavaScript in your browser and try again.
              </h3>
            </div>
          </noscript>
        </body>
      </html>
    );
  }
}
