// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
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
  Message
} from "../components/sections/contactUs/form";
class Index extends Component {
  static async getInitialProps({ req }) {
    let styleLogoKing = {
      WebkitFilter:
        "drop-shadow(6px 0px 0 #ef5753) drop-shadow(-6px 0px 0px #ef5753) drop-shadow(0px 3px 0px #ef5753) drop-shadow(0px -3px 0px #ef5753)",
      filter:
        "drop-shadow(6px 0px 0 #ef5753) drop-shadow(-6px 0px 0px #ef5753) drop-shadow(0px 3px 0px #ef5753) drop-shadow(0px -3px 0px #ef5753)"
    };
    return { styleLogoKing };
  }
  render() {
    return (
      <Layout>
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
                    onClick={this.getResponse}
                    className="cursor-pointer font-extrabold text-3xl md:text-2xl sm:text-2xl p-2 mt-4"
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
                        <Name {...this.props} />
                        <Email {...this.props} />
                        <Subject {...this.props} />
                        <Message {...this.props} />
                        <div className=" flex justify-left my-2 mb-4">
                          <ReCAPTCHA
                            sitekey="6LdVgJIUAAAAADf3mm-422DqVktwJJuPs5TB2578"
                            ref="recaptchaRef"
                          />
                        </div>
                        <div className="w-main sm:w-full md:w-full flex justify-center">
                          <div className="w-200 sm:w-full md:w-full md:justify-center flex justify-center">
                            <button
                              type="submit"
                              className="p-2 sm:p-3 md:p-3 px-4 w-150 sm:w-full md:w-full text-lg text-white rounded bg-red-dark hover:bg-red-light font-bold"
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

  submitForm = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new window.FormData(form);
    if (this.refs.recaptchaRef.getValue() != null) {
      this.props.sendEmail({
        name: formData.get("name"),
        body: formData.get("body"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        response: this.refs.recaptchaRef.getValue()
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
    sendEmail: input => dispatch(actions.sendEmail(input)),
    refreshEmailForm: () => dispatch(actions.refreshEmailForm()),
    setRecaptcha: response => dispatch(actions.setRecaptcha(response))
  };
};

export default connect(
  state => state,
  mapDispatchToprops
)(withData(Index));
