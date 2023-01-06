import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import BasicInput from '../components/basic-input'
import Footer from '../components/footer'

const ZPreQualification6IDVerification = (props) => {
  return (
    <>
      <div className="z-pre-qualification6i-d-verification-container">
        <Head>
          <title>
            z-Pre-Qualification-6-ID-Verification - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-6-ID-Verification - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name7"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification6i-d-verification-container1">
          <div className="z-pre-qualification6i-d-verification-frame43">
            <div className="z-pre-qualification6i-d-verification-frame35">
              <img
                src="/playground_assets/idverification.svg"
                className="z-pre-qualification6i-d-verification-location"
              />
              <div className="z-pre-qualification6i-d-verification-text-heading-subheading">
                <span className="z-pre-qualification6i-d-verification-text heading1">
                  ID VERIFICATION
                </span>
                <span className="z-pre-qualification6i-d-verification-text1 body1">
                  Fill out the details below to verify your address
                </span>
              </div>
            </div>
            <div className="z-pre-qualification6i-d-verification-frame79">
              <Link href="/z-pre-qualification-7-credit-assessment">
                <a className="z-pre-qualification6i-d-verification-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name5"
                    className="z-pre-qualification6i-d-verification-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-pre-qualification6i-d-verification-frame78">
              <div className="z-pre-qualification6i-d-verification-container2">
                <div className="z-pre-qualification6i-d-verification-container3">
                  <BasicInput
                    rootClassName="basic-input-root-class-name"
                    textinput_placeholder="First Name"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name1"
                    textinput_placeholder="Last Name"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name3"
                    textinput_placeholder="Date of Birth"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name2"
                    textinput_placeholder="Social Security Number"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name5"
                    textinput_placeholder="Address"
                  ></BasicInput>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification6i-d-verification-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification6i-d-verification-container1 {
            width: 100%;
            height: 812px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification6i-d-verification-frame43 {
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
          .z-pre-qualification6i-d-verification-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification6i-d-verification-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-pre-qualification6i-d-verification-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification6i-d-verification-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification6i-d-verification-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification6i-d-verification-frame79 {
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
          .z-pre-qualification6i-d-verification-link {
            display: contents;
          }
          .z-pre-qualification6i-d-verification-component2 {
            text-decoration: none;
          }
          .z-pre-qualification6i-d-verification-frame78 {
            top: 197px;
            left: 92px;
            height: 528px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification6i-d-verification-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-pre-qualification6i-d-verification-container3 {
            flex: 0 0 auto;
            height: 518px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .z-pre-qualification6i-d-verification-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification6i-d-verification-frame43 {
              width: 697px;
            }
            .z-pre-qualification6i-d-verification-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification6i-d-verification-frame78 {
              left: 0px;
              right: 0px;
              height: 530px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification6i-d-verification-frame43 {
              width: 100%;
            }
            .z-pre-qualification6i-d-verification-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification6IDVerification
