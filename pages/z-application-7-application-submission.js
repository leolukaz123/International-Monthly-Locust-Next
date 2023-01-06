import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import Footer from '../components/footer'

const ZApplication7ApplicationSubmission = (props) => {
  return (
    <>
      <div className="z-application7application-submission-container">
        <Head>
          <title>
            z-Application-7-Application-Submission - International Monthly
            Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-7-Application-Submission - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name16"></Navbar>
        <Steps></Steps>
        <div className="z-application7application-submission-container1">
          <div className="z-application7application-submission-frame43">
            <div className="z-application7application-submission-frame35">
              <img
                alt="location1745"
                src="/playground_assets/confirmation.svg"
                className="z-application7application-submission-location"
              />
              <div className="z-application7application-submission-text-heading-subheading">
                <span className="z-application7application-submission-text heading1">
                  APPLICATION SUBMITTED
                </span>
                <span className="z-application7application-submission-text1 body1">
                  Thank you for submitting the application. We will now review
                  it and get back to you within 10-15 working days.
                </span>
              </div>
            </div>
            <div className="z-application7application-submission-frame79">
              <Largebutton rootClassName="largebutton-root-class-name14"></Largebutton>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name16"></Footer>
      </div>
      <style jsx>
        {`
          .z-application7application-submission-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application7application-submission-container1 {
            width: 100%;
            height: 314px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application7application-submission-frame43 {
            width: 913px;
            height: 312px;
            display: flex;
            padding: 0 89px;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 5px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .z-application7application-submission-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application7application-submission-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application7application-submission-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application7application-submission-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application7application-submission-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application7application-submission-frame79 {
            left: 0px;
            right: 0px;
            bottom: var(--dl-space-space-unit);
            margin: auto;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .z-application7application-submission-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application7application-submission-frame43 {
              width: 697px;
            }
            .z-application7application-submission-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-application7application-submission-container1 {
              height: 806px;
            }
            .z-application7application-submission-frame43 {
              width: 100%;
              height: 806px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication7ApplicationSubmission
