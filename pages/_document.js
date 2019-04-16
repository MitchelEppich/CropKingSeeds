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
          <meta name="theme-color" content="#ef5753" />
          {/* <title key="titlePage">
            Buy Feminized & Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta
            name="description"
            key="desc"
            content="Crop King Seeds has been perfecting the marijuana seeds industry for medical and commercial growers seeking maximum results in THC levels and harvest size."
          /> */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=6"
            key="viewport"
          />
          <meta
            name="copyright"
            content="© 2005 - 2019 Crop King Seeds. All Rights Reserved."
          />
          {/* <link rel="manifest" href="/_next/static/manifest.json" /> */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/ "
            crossorigin
          />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Lato:400,900"
            rel="stylesheet"
          /> */}
          <link
            rel="stylesheet"
            // as="font"
            href="https://fonts.googleapis.com/css?family=Questrial"
            crossOrigin="anonymous"
          />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Questrial"
            rel="stylesheet"
          /> */}

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
          <script
            async
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                legalName: "Crop King Seeds",
                url: "https://www.cropkingseeds.com/",
                sameAs: [
                  "https://www.instagram.com/cropkingseeds/",
                  "https://twitter.com/cropkingseeds",
                  "https://www.facebook.com/cropkingSeeds/"
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-844-276-7546",
                    contactType: "customer service"
                  }
                ],
                logo:
                  "https://dcfgweqx7od72.cloudfront.net/logos/cks-logo-header.png"
              })
            }}
          />
          <script
            async
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebSite",
                name: "Crop King Seeds",
                url: "https://www.cropkingseeds.com/"
                // potentialAction: {
                //   "@type": "SearchAction",
                //   target: "https://www.cropkingseeds.com/?s={search_term}",
                //   "query-input": "required name=search_term"
                // }
              })
            }}
          />
          <script defer src="../static/scripts/functions.js" />
        </body>
      </html>
    );
  }
}
