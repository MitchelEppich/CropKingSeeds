import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store";

import { detect } from "detect-browser";
const browser = detect();

export default withRedux(makeStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      return { pageProps, router };
    }

    render() {
      const { Component, pageProps, store, router } = this.props;
      let supportedBrowser = true;

      let agent =
        browser.name != "node" ? navigator.userAgent.toLowerCase() : "node";
      if (
        agent.includes(["opr", "chrome", "firefox", "safari"]) == -1 ||
        agent.includes("edge") ||
        (agent.includes("node") && typeof navigator === undefined)
      ) {
        supportedBrowser = false;
      }
      if (!supportedBrowser) {
        alert(
          "Your browser is not supported. Use Google Chrome for the best experience."
        );
      }
      return (
        <Provider store={store}>
          <Container>
            <Component
              supportedBrowser={{ is: supportedBrowser, browser: browser.name }}
              {...pageProps}
            />
          </Container>
        </Provider>
      );
    }
  }
);
