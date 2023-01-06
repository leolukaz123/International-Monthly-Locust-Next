import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import BasicInput from '../components/basic-input'
import Footer from '../components/footer'

const ZApplication1IDVerification = (props) => {
  return (
    <>
      <div className="z-application1i-d-verification-container">
        <Head>
          <title>
            z-Application-1-ID-Verification - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-1-ID-Verification - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name9"></Navbar>
        <Steps></Steps>
        <div className="z-application1i-d-verification-container1">
          <div className="z-application1i-d-verification-frame43">
            <div className="z-application1i-d-verification-frame35">
              <img
                src="/playground_assets/idverification.svg"
                className="z-application1i-d-verification-location"
              />
              <div className="z-application1i-d-verification-text-heading-subheading">
                <span className="z-application1i-d-verification-text heading1">
                  ID VERIFICATION
                </span>
                <span className="z-application1i-d-verification-text1 body1">
                  Fill out the details below to verify your address
                </span>
              </div>
            </div>
            <div className="z-application1i-d-verification-frame79">
              <Link href="/z-application-2-i-d-verification2">
                <a className="z-application1i-d-verification-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name7"
                    className="z-application1i-d-verification-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="autofill">
              <div className="z-application1i-d-verification-container2">
                <div className="z-application1i-d-verification-container3">
                  <BasicInput
                    rootClassName="basic-input-root-class-name4"
                    textinput_placeholder="First Name (prefilled)"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name6"
                    textinput_placeholder="Last Name (prefilled)"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name7"
                    textinput_placeholder="Date of Birth (prefilled)"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name8"
                    textinput_placeholder="Social Security Number (prefilled)"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name9"
                    textinput_placeholder="Address (prefilled)"
                  ></BasicInput>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name9"></Footer>
      </div>
      <style jsx>
        {`
          .z-application1i-d-verification-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application1i-d-verification-container1 {
            width: 100%;
            height: 812px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application1i-d-verification-frame43 {
            width: 913px;
            height: 812px;
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
          .z-application1i-d-verification-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application1i-d-verification-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application1i-d-verification-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application1i-d-verification-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application1i-d-verification-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application1i-d-verification-frame79 {
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
          .z-application1i-d-verification-link {
            display: contents;
          }
          .z-application1i-d-verification-component2 {
            text-decoration: none;
          }
          .z-application1i-d-verification-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-application1i-d-verification-container3 {
            flex: 0 0 auto;
            height: 518px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 1200px) {
            .z-application1i-d-verification-container3 {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .z-application1i-d-verification-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application1i-d-verification-frame43 {
              width: 697px;
            }
            .z-application1i-d-verification-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-application1i-d-verification-frame43 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication1IDVerification
