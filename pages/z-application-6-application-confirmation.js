import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import SummaryChart from '../components/summary-chart'
import Footer from '../components/footer'

const ZApplication6ApplicationConfirmation = (props) => {
  return (
    <>
      <div className="z-application6application-confirmation-container">
        <Head>
          <title>
            z-Application-6-Application-Confirmation - International Monthly
            Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-6-Application-Confirmation - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name15"></Navbar>
        <Steps></Steps>
        <div className="z-application6application-confirmation-container1">
          <div className="z-application6application-confirmation-frame43">
            <div className="z-application6application-confirmation-frame35">
              <img
                alt="location1745"
                src="/playground_assets/confirmation.svg"
                className="z-application6application-confirmation-location"
              />
              <div className="z-application6application-confirmation-text-heading-subheading">
                <span className="z-application6application-confirmation-text heading1">
                  CONFIRM APPLICATION
                </span>
                <span className="z-application6application-confirmation-text1 body1">
                  Add your property interests below
                </span>
              </div>
            </div>
            <div className="z-application6application-confirmation-frame79">
              <Largebutton rootClassName="largebutton-root-class-name13"></Largebutton>
            </div>
            <div className="z-application6application-confirmation-frame78">
              <SummaryChart></SummaryChart>
              <SummaryChart></SummaryChart>
              <SummaryChart></SummaryChart>
              <SummaryChart></SummaryChart>
            </div>
            <span className="z-application6application-confirmation-text2">
              Add Property Interest +
            </span>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name15"></Footer>
      </div>
      <style jsx>
        {`
          .z-application6application-confirmation-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application6application-confirmation-container1 {
            width: 100%;
            height: 1198px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application6application-confirmation-frame43 {
            width: 913px;
            height: 100%;
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
          .z-application6application-confirmation-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application6application-confirmation-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application6application-confirmation-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application6application-confirmation-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application6application-confirmation-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application6application-confirmation-frame79 {
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
          .z-application6application-confirmation-frame78 {
            top: 197px;
            left: 92px;
            height: auto;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application6application-confirmation-text2 {
            left: 0px;
            right: 0px;
            bottom: var(--dl-space-space-sixunits);
            cursor: pointer;
            margin: auto;
            position: absolute;
            text-align: center;
            transition: 0.3s;
          }
          .z-application6application-confirmation-text2:hover {
            color: var(--dl-color-default-1aa7ec1);
          }
          @media (max-width: 991px) {
            .z-application6application-confirmation-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application6application-confirmation-frame43 {
              width: 697px;
            }
            .z-application6application-confirmation-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application6application-confirmation-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-application6application-confirmation-container1 {
              height: 806px;
            }
            .z-application6application-confirmation-frame43 {
              width: 100%;
              height: 806px;
            }
            .z-application6application-confirmation-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication6ApplicationConfirmation
