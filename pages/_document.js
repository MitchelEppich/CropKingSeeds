// library imports
import Document, { Head, Main, NextScript } from "next/document";
import { library } from "@fortawesome/fontawesome-svg-core"; // FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// custom imports

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="title"
            content="Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds"
          />
          <meta
            name="description"
            content="Crop King Seeds has been perfecting the marijuana seeds industry for medical and commercial growers seeking maximum results in THC levels and harvest size."
          />
          <meta name="theme-color" content="#ef5753" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=6"
            key="viewport"
          />
          <meta
            name="keywords"
            content="crop king seeds, feminized seeds, autoflowering seeds, medical marijuana, marijuana seeds, marijuana seeds canada, cannabis, cannabis seeds"
          />
          <meta
            name="copyright"
            content="© 2005 - 2019 Crop King Seeds. All Rights Reserved."
          />
          {/* <link rel="manifest" href="/_next/static/manifest.json" /> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="/_next/static/style.css"
          />
          <link rel="icon" href="../static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <style
              dangerouslySetInnerHTML={{
                __html: `.noscriptpage{display: none }`
              }}
            />
            <div className="w-full flex-1 h-screen content-center text-center">
              <div className="w-200 mt-64 mx-auto">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="fa-2x "
                />
              </div>
              <h1 className="mt-10 title-message">JavaScript is Required.</h1>
              <h3 className="mt-2 subtitle-message">
                Enable JavaScript in your browser and try again.
              </h3>
            </div>
          </noscript>
          <script src="../static/scripts/functions.js" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                name: "Crop King Seeds",
                url: "https://www.cropkingseeds.com",
                sameAs: [
                  "https://www.instagram.com/cropkingseeds/",
                  "https://twitter.com/cropkingseeds",
                  "https://www.facebook.com/cropkingSeeds/"
                ]
              })
            }}
          />
        </body>
      </html>
    );
  }
}
