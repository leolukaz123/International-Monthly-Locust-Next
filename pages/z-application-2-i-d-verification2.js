import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import BasicInput from '../components/basic-input'
import Footer from '../components/footer'

const ZApplication2IDVerification2 = (props) => {
  return (
    <>
      <div className="z-application2i-d-verification2-container">
        <Head>
          <title>
            z-Application-2-ID-Verification2 - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-2-ID-Verification2 - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name10"></Navbar>
        <Steps></Steps>
        <div className="z-application2i-d-verification2-container1">
          <div className="z-application2i-d-verification2-frame43">
            <div className="z-application2i-d-verification2-frame35">
              <img
                src="/playground_assets/idverification.svg"
                className="z-application2i-d-verification2-location"
              />
              <div className="z-application2i-d-verification2-text-heading-subheading">
                <span className="z-application2i-d-verification2-text heading1">
                  ID VERIFICATION
                </span>
                <span className="z-application2i-d-verification2-text1 body1">
                  Fill out the details below to verify your address
                </span>
              </div>
            </div>
            <div className="z-application2i-d-verification2-frame79">
              <Link href="/z-application-3-selfie-verification">
                <a className="z-application2i-d-verification2-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name8"
                    className="z-application2i-d-verification2-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-application2i-d-verification2-frame78">
              <div className="z-application2i-d-verification2-container2">
                <div className="z-application2i-d-verification2-container3">
                  <BasicInput
                    rootClassName="basic-input-root-class-name10"
                    textinput_placeholder="Other Info"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name11"
                    textinput_placeholder="Mobile Number"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name12"
                    textinput_placeholder="Passport Number"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name13"
                    textinput_placeholder="Medicare Number"
                  ></BasicInput>
                  <BasicInput
                    rootClassName="basic-input-root-class-name14"
                    textinput_placeholder="Licence Number"
                  ></BasicInput>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name10"></Footer>
      </div>
      <style jsx>
        {`
          .z-application2i-d-verification2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application2i-d-verification2-container1 {
            width: 100%;
            height: 812px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application2i-d-verification2-frame43 {
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
          .z-application2i-d-verification2-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application2i-d-verification2-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application2i-d-verification2-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application2i-d-verification2-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application2i-d-verification2-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application2i-d-verification2-frame79 {
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
          .z-application2i-d-verification2-link {
            display: contents;
          }
          .z-application2i-d-verification2-component2 {
            text-decoration: none;
          }
          .z-application2i-d-verification2-frame78 {
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
          .z-application2i-d-verification2-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-application2i-d-verification2-container3 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .z-application2i-d-verification2-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application2i-d-verification2-frame43 {
              width: 697px;
            }
            .z-application2i-d-verification2-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application2i-d-verification2-frame78 {
              left: 0px;
              right: 0px;
              height: 530px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-application2i-d-verification2-frame43 {
              width: 100%;
            }
            .z-application2i-d-verification2-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication2IDVerification2
