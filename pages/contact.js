// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Heading from "../components/sections/contactUs/heading";
import EmailSent from "../components/sections/contactUs/emailSent";
import ContactDetails from "../components/sections/contactUs/contactDetails";
import {
  Name,
  Email,
  Subject,
  Message,
  Sponsorship,
  Advertisement
} from "../components/sections/contactUs/form";
import { initGA, logPageView } from "../scripts/ga";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

const isClient = typeof document !== "undefined";
import Router from "next/router";

class Index extends Component {
  constructor(props) {
    super(props);
    advertisementDate: new Date();
  }
  static async getInitialProps({ req }) {
    let styleLogoKing = {
      WebkitFilter:
        "drop-shadow(6px 0px 0 #ef5753) drop-shadow(-6px 0px 0px #ef5753) drop-shadow(0px 3px 0px #ef5753) drop-shadow(0px -3px 0px #ef5753)",
      filter:
        "drop-shadow(6px 0px 0 #ef5753) drop-shadow(-6px 0px 0px #ef5753) drop-shadow(0px 3px 0px #ef5753) drop-shadow(0px -3px 0px #ef5753)"
    };
    return { styleLogoKing };
  }
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    if (!isClient) return <div />;
    return (
      <Layout {...this.props}>
        {typeof document !== "undefined" ? (
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateBreadcrumbMarkup(Router.asPath))
              }}
            />
          </Head>
        ) : null}
        <div className="pt-1">
          <div className="w-full p-2 pb-12">
            <Heading {...this.props} />
            <div className="w-full p-2 mt-10">
              <div
                style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.18)" }}
                className="w-700 sm:w-full sm:px-2 lg:w-600 md:w-full lg:px-2 md:px-2 md:pt-0 min-h-600 sm:h-full md:h-full md:px-2 xxl:mx-auto xl:mx-auto px-8 relative rounded-lg p-2"
              >
                <div className="w-full p-2">
                  <h2
                    // onClick={this.getResponse}
                    className="font-extrabold text-3xl md:text-2xl sm:text-2xl p-2 mt-4"
                  >
                    Send us a message
                  </h2>
                  <p className="text-sm p-1 px-2">
                    <span className="text-red">*</span> Indicates required field
                  </p>
                </div>
                <div className="p-2 w-full">
                  {!this.props.misc.emailSent ? (
                    <form
                      onSubmit={e => {
                        this.submitForm(e);
                      }}
                    >
                      <div className="w-500 lg:w-400 md:w-full sm:w-full">
                        <Subject {...this.props} />
                        <Name {...this.props} />
                        <Email {...this.props} />
                        {this.props.misc.contactSubject === "Advertisement" ? (
                          <Advertisement {...this.props} />
                        ) : null}

                        {this.props.misc.contactSubject ===
                        "Event Sponsorship" ? (
                          <Sponsorship {...this.props} />
                        ) : null}

                        <Message {...this.props} />
                        <div className="mx-auto text-left flex justify-left my-2 mb-4 p-1">
                          <ReCAPTCHA
                            sitekey="6LdVgJIUAAAAADf3mm-422DqVktwJJuPs5TB2578"
                            ref="recaptchaRef"
                            size={
                              ["sm", "md", "lg"].includes(
                                this.props.misc.mediaSize
                              )
                                ? "compact"
                                : "normal"
                            }
                          />
                        </div>
                        <div className="w-main sm:w-full md:w-full flex justify-center">
                          <div className="w-full sm:w-full md:w-full md:justify-center flex justify-center">
                            <button
                              type="submit"
                              className="p-2 sm:p-3 md:p-3 px-4 w-full sm:w-full md:w-full text-lg text-white rounded bg-red-dark hover:bg-red-light font-bold"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <EmailSent {...this.props} />
                  )}
                  <ContactDetails {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  changeDate(date) {
    this.setState({
      advertisementDate: date
    });
  }

  submitForm = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new window.FormData(form);
    if (this.refs.recaptchaRef.getValue() != null) {
      this.props.sendEmail({
        type: "contact",
        name: formData.get("name"),
        body: formData.get("body"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        response: this.refs.recaptchaRef.getValue(),
        date: formData.get("date") !== null ? formData.get("date") : "",
        company:
          formData.get("company") !== null ? formData.get("company") : "",
        cost:
          formData.get("cost") !== null ? parseFloat(formData.get("cost")) : "",
        mediaKit:
          formData.get("mediaKit") !== null ? formData.get("mediaKit") : "",
        phone: formData.get("phone") !== null ? formData.get("phone") : "",
        location:
          formData.get("location") !== null ? formData.get("location") : "",
        website:
          formData.get("website") !== null ? formData.get("website") : "",
        eventName:
          formData.get("eventName") !== null ? formData.get("eventName") : ""
      });
      form.reset();
    } else {
      console.log("captcha null");
    }
  };
}

const mapDispatchToprops = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setSubject: subject => dispatch(actions.setSubject(subject)),
    sendEmail: input => dispatch(actions.sendEmail(input)),
    refreshEmailForm: () => dispatch(actions.refreshEmailForm()),
    setRecaptcha: response => dispatch(actions.setRecaptcha(response)),
    pickDate: date => dispatch(actions.pickDate(date))
  };
};

export default connect(
  state => state,
  mapDispatchToprops
)(withData(Index));
