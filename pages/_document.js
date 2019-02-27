import Document, { Head, Main, NextScript } from "next/document"

import strainsData from "../static/strainsSchemaData"
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
} from "react-structured-data"

import { library } from "@fortawesome/fontawesome-svg-core" // FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  generateSchemaMarkup = strains => {
    return strains.map((strain, index) => {
      let reviews,
        priceLength = strain.price[0] > 0
      if (strain.reviews != null && strain.reviews.length > 0) {
        reviews = strain.reviews.map((review, index) => {
          let str = review
          let { 0: name, 1: email, 2: body, 3: rating, 4: time } =
            str != "" ? str.split("&=>") : ["", "", "", ""]
          return (
            <Review key={index * 2} reviewBody={body} datePublished={time}>
              <Author name={name} />
              <Location name="" />
              <Rating ratingValue={rating} />
            </Review>
          )
        })
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
              price: strain.price[0] > 0 ? strain.price[0] : strain.price[1]
            }}
          >
            <AggregateRating
              ratingValue={strain.rating}
              reviewCount={strain.reviews.length}
            />
            <GenericCollection type="review">
              {reviews != null ? reviews : null}
            </GenericCollection>
            <Generic
              type="AggregateOffer"
              jsonldtype="AggregateOffer"
              schema={{
                highPrice: strain.price[2],
                lowPrice: priceLength ? strain.price[0] : strain.price[1]
              }}
            />
          </Generic>
        </JSONLD>
      )
    })
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
          <meta
            name="copyright"
            content="© 2005 - 2019 Crop King Seeds. All Rights Reserved."
          />
          {/* <link rel="manifest" href="/_next/static/manifest.json" /> */}
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="../static/favicon.ico" />
          {this.generateSchemaMarkup(strainsData)}
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
        </body>
      </html>
    )
  }
}
